"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const googleRouter_1 = __importDefault(require("./auth/googleRouter"));
const facebookRouter_1 = __importDefault(require("./auth/facebookRouter"));
const linkedinRouter_1 = __importDefault(require("./auth/linkedinRouter"));
const router = (0, express_1.Router)();
router.use("/google", googleRouter_1.default);
router.use("/linkedin", linkedinRouter_1.default);
router.use("/facebook", facebookRouter_1.default);
// router.get("/signIn", signIn);
// router.get("/logout", logout);
router.get("/failed", (_req, res) => res.send("authentication failed"));
exports.default = router;
