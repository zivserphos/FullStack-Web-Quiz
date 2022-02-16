"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_facebook_1 = require("passport-facebook");
const index_1 = __importDefault(require("../index"));
passport_1.default.use(new passport_facebook_1.Strategy({
    clientID: index_1.default.facebookClientId,
    clientSecret: index_1.default.facebookSecret,
    callbackURL: "http://localhost:3001/auth/facebook/callback",
}, (_accessToken, _refreshToken, profile, done) => 
/*
use the profile info (mainly profile id) to check if the user is registerd in ur db
If yes select the user and pass him to the done callback
If not create the user and then select him and pass to callback
*/
done(null, profile)));
