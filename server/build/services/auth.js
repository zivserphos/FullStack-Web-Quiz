"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
/* eslint-disable no-throw-literal */
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const email_validator_1 = __importDefault(require("email-validator"));
const index_1 = __importDefault(require("../utils/config/index"));
const Token_1 = __importDefault(require("../db/models/Token"));
const User_1 = __importDefault(require("../db/models/User"));
const bcrypt_1 = __importDefault(require("./bcrypt"));
const badRequest = (cause) => ({
    status: 400,
    message: { error: cause },
});
const conflict = (cause) => ({
    status: 409,
    message: { error: cause },
});
const loginPassport = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email });
    if (!user)
        throw { status: 400, message: "No such email or username" };
    const userId = user._id;
    const accessToken = jsonwebtoken_1.default.sign({ email, userId }, index_1.default.secret, {
        expiresIn: "240s",
    });
    const refreshToken = jsonwebtoken_1.default.sign({ userId, email }, index_1.default.secret, {
        expiresIn: index_1.default.refreshTime,
    });
    yield Token_1.default.findOneAndUpdate({ userId }, { refreshToken, accessToken, userId }, { upsert: true, new: true, setDefaultsOnInsert: true });
    return { accessToken, refreshToken };
});
const login = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User_1.default.findOne({ email });
    if (!user)
        throw { status: 400, message: "No such email or username" };
    const correctPassword = yield bcrypt_1.default.compreHashPASS(user.password, password);
    if (!correctPassword)
        throw { status: 400, message: "Bad password" };
    const userId = user._id;
    const accessToken = jsonwebtoken_1.default.sign({ email, userId }, index_1.default.secret, {
        expiresIn: index_1.default.accessTime,
    });
    const refreshToken = jsonwebtoken_1.default.sign({ userId, email }, index_1.default.secret, {
        expiresIn: index_1.default.refreshTime,
    });
    yield Token_1.default.findOneAndUpdate({ userId }, { refreshToken, accessToken, userId }, { upsert: true, new: true, setDefaultsOnInsert: true });
    return { accessToken, refreshToken };
});
const logout = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { deletedCount } = yield Token_1.default.deleteOne({ userId });
    return deletedCount > 0;
});
const signUpWithPassport = ({ first_name, last_name, email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    const exists = yield User_1.default.find({ email });
    if (exists.length > 0)
        throw { status: 400, message: "email already exists" };
    const hashPassword = yield bcrypt_1.default.genHashPass(password);
    const user = yield User_1.default.create({
        first_name,
        last_name,
        email,
        password: hashPassword,
    });
    return user;
});
const signUpJWT = ({ first_name, last_name, email, password, }) => __awaiter(void 0, void 0, void 0, function* () {
    if (!first_name || !last_name || !email || !password) {
        throw badRequest("missing parameters");
    }
    if (password.trim().length < 3) {
        throw badRequest("password too short");
    }
    if (!email_validator_1.default.validate(email))
        throw badRequest("Invalid email");
    const exists = yield User_1.default.find({ email });
    if (exists.length > 0)
        throw conflict("email already exists");
    const hashPassword = yield bcrypt_1.default.genHashPass(password);
    const user = yield User_1.default.create({
        first_name,
        last_name,
        email,
        password: hashPassword,
    });
    return user;
});
exports.default = {
    signUpWithPassport,
    login,
    signUpJWT,
    logout,
    loginPassport,
};
