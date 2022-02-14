"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const auth_1 = require("../../controllers/auth");
const router = (0, express_1.Router)();
router.get("/", passport_1.default.authenticate("facebook", { scope: ["profile", "email"] }));
router.get("/callback", passport_1.default.authenticate("facebook", { failureRedirect: "auth/failed" }), auth_1.signIn);
router.get("/logout", auth_1.logout);
exports.default = router;
