"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT || 3001,
    dbUrl: process.env.MONGO_URI || "",
    secret: process.env.SECRET || "secret",
    accessTime: process.env.ACCESS_TIME || "5m",
    refreshTime: process.env.REFRESH_TOKEN || "30m",
    googleSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    googleClientId: process.env.GOOGLE_CLIENT_ID || "",
    githubClientId: process.env.GITHUB_CLIENT_ID || "",
    githubSecret: process.env.GITHUB_CLIENT_SECRET || "",
    linkedinClientId: process.env.LINKEDIN_CLIENT_ID || "",
    linkedinSecret: process.env.LINKEDIN_SECRET || "",
    z_s_email: process.env.ZS_EMAIL || "",
    z_s_password: process.env.ZS_PASSWORD || "",
    cookieKey: process.env.COOKIE_KEY || "",
};
