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
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const api_1 = require("../controllers/api");
const User_1 = __importDefault(require("../db/models/User"));
const router = (0, express_1.Router)();
router.get("/aaaa", (_req, res) => {
    passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User_1.default.findById(id);
        done(null, user || null);
    }));
    res.send("jesus");
});
router.get("/subject/:difficulty");
router.get("/:subject", api_1.genQuiz);
router.post("/send-quiz", api_1.sendQuiz);
router.get("/:subject/:limit", api_1.genCustom);
exports.default = router;
