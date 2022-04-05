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
const passport_1 = __importDefault(require("passport"));
const passport_github2_1 = require("passport-github2");
const nanoid_1 = require("nanoid");
const auth_1 = __importDefault(require("../../../services/auth"));
const User_1 = __importDefault(require("../../../db/models/User"));
const index_1 = __importDefault(require("../index"));
passport_1.default.use(new passport_github2_1.Strategy({
    clientID: index_1.default.githubClientId,
    clientSecret: index_1.default.githubSecret,
    callbackURL: `${index_1.default.callbackURL}/auth/github/callback`,
}, (_accessToken, _refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    if (!profile.username)
        return done();
    const email = profile.username;
    const user = yield User_1.default.findOne({ email });
    if (!user) {
        const newUser = yield auth_1.default.signUpWithPassport({
            first_name: profile.username || "",
            last_name: profile.username || "",
            email,
            password: (0, nanoid_1.nanoid)().slice(8),
        });
        return done(null, newUser);
    }
    return done(null, user);
})));
