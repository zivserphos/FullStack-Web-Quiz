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
exports.logout = void 0;
const auth_1 = __importDefault(require("../services/auth"));
const logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user)
        return res.redirect("/");
    yield auth_1.default.logout(req.email).catch((err) => next(err));
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    req.session = null;
    req.logout();
    return res.redirect("/sign-up");
});
exports.logout = logout;
const login = (_req, res) => res.redirect("/");
const loginJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const tokens = yield auth_1.default.login(email, password);
        return res.status(200).send(tokens);
    }
    catch (err) {
        return next(err);
    }
});
const signUp = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, first_name, last_name, password } = req.body;
    try {
        const user = yield auth_1.default.signUpJWT({
            email,
            first_name,
            last_name,
            password,
        });
        console.log(user);
        return user
            ? res.status(200).send("added succesfully")
            : res.status(400).send("could not add user");
    }
    catch (err) {
        return next(err);
    }
});
exports.default = { logout: exports.logout, login, loginJWT, signUp };
