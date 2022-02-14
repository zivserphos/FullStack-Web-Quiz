"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const genQuestions = (subject, limit) => {
    const contentFile = JSON.parse(fs_1.default.readFileSync(`./src/db/questions/${subject}.json`).toString());
    const fileCopy = [...contentFile];
    const quiz = [];
    for (let i = 0; i < limit; i += 1) {
        const randomNum = Math.floor(Math.random() * fileCopy.length);
        quiz.push(fileCopy[randomNum]);
        fileCopy.splice(randomNum, 1);
    }
    return quiz;
};
const genQuiz = (subject) => genQuestions(subject, 15);
const genCustom = (subject, limit) => genQuestions(subject, limit);
exports.default = { genQuiz, genCustom };
