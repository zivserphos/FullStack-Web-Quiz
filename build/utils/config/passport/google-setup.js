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
/* eslint-disable import/extensions */
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const nanoid_1 = require("nanoid");
const index_1 = __importDefault(require("../index"));
const User_1 = __importDefault(require("../../../db/models/User"));
const auth_1 = __importDefault(require("../../../services/auth"));
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: index_1.default.googleClientId,
    clientSecret: index_1.default.googleSecret,
    callbackURL: "https://linkedin-quizzes.herokuapp.com/auth/google/callback",
}, (_accessToken, _refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    if (!profile.emails)
        return done();
    const email = profile.emails[0].value;
    const user = yield User_1.default.findOne({ email });
    if (!user) {
        const newUser = yield auth_1.default.signUpWithPassport({
            first_name: ((_a = profile.name) === null || _a === void 0 ? void 0 : _a.givenName) || "",
            last_name: ((_b = profile.name) === null || _b === void 0 ? void 0 : _b.familyName) || "",
            email,
            password: (0, nanoid_1.nanoid)().slice(8),
        });
        return done(null, newUser);
    }
    return done(null, user);
})));
