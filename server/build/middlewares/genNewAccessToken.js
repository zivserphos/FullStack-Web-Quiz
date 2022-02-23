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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../utils/config/index"));
const Token_1 = __importDefault(require("../db/models/Token"));
const User_1 = __importDefault(require("../db/models/User"));
const jwtError = () => ({
    status: 401,
    message: { error: "token missing or invalid" },
});
const genNewAccesToken = (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = yield Token_1.default.findOne({ accessToken: req.token });
        if (token) {
            const id = jsonwebtoken_1.default.verify(token.refreshToken, index_1.default.secret);
            const user = yield User_1.default.findById(id.userId);
            req.email = user.email;
            const updatedAccessToken = jsonwebtoken_1.default.sign({ email: user.email, id: user.id }, index_1.default.secret, {
                expiresIn: index_1.default.accessTime,
            });
            req.token = updatedAccessToken;
            req.updateToken = true;
            return next();
        }
        return next(jwtError());
    }
    catch (err) {
        return next(jwtError());
    }
});
exports.default = genNewAccesToken;
