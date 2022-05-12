"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fake_1 = require("../controllers/fake");
const router = (0, express_1.Router)();
router.get("/stats/users", fake_1.fakeUsersStats);
router.get("/stats/quizzes", fake_1.fakeQuizzesDetails);
exports.default = router;
