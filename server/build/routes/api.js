"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
const express_1 = require("express");
const api_1 = require("../controllers/api");
const router = (0, express_1.Router)();
router.get("/subject/:difficulty");
router.get("/:subject", api_1.genQuiz);
router.post("/send-quiz", api_1.sendQuiz);
router.get("/:subject/:limit", api_1.genCustom);
exports.default = router;
