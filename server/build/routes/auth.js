"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/no-named-as-default-member */
const express_1 = require("express");
const googleRouter_1 = __importDefault(require("./auth/googleRouter"));
const githubRouter_1 = __importDefault(require("./auth/githubRouter"));
const linkedinRouter_1 = __importDefault(require("./auth/linkedinRouter"));
const auth_1 = __importDefault(require("../controllers/auth"));
const router = (0, express_1.Router)();
router.use("/google", googleRouter_1.default);
router.use("/linkedin", linkedinRouter_1.default);
router.use("/github", githubRouter_1.default);
router.post("/login", auth_1.default.loginJWT);
router.post("/sign-up", auth_1.default.signUp);
router.delete("/logout", auth_1.default.logout);
router.get("/failed", (_req, res) => res.send("authentication failed"));
exports.default = router;
