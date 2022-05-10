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
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
const fs_1 = __importDefault(require("fs"));
const faker_1 = require("@faker-js/faker");
const Quiz_1 = __importDefault(require("../db/models/Quiz"));
const User_1 = __importDefault(require("../db/models/User"));
const sendQuiz = (quiz, userEmail) => __awaiter(void 0, void 0, void 0, function* () {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = yield User_1.default.findOne({ email: userEmail });
    const savedQuiz = yield Quiz_1.default.create({
        userId: user._id,
        result: quiz.result,
        subject: quiz.subject,
        questions: quiz.questions,
    });
    const userQuizzes = [...(user.quizzes || [])];
    user.quizzes = [userQuizzes.concat(savedQuiz._id)];
    user.save();
});
const genFakeQuiz = (subject) => ({
    questions: genQuiz(subject),
    subject,
    date: faker_1.faker.date.between("2022-01-01T00:00:00.000Z", "2022-05-08T00:00:00.000Z"),
    result: Math.random() > 0.82 ? 15 : Math.ceil(Math.random() * 14),
});
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
const genFakeUser = (num) => {
    const fakeUsers = [];
    for (let i = 0; i < num; i += 1) {
        fakeUsers.push({
            date: faker_1.faker.date.between("2022-05-01T00:00:00.000Z", "2022-06-01T00:00:00.000Z"),
            email: faker_1.faker.internet.email(),
        });
    }
    return fakeUsers;
};
const genQuiz = (subject) => genQuestions(subject, 15);
const genCustom = (subject, limit) => genQuestions(subject, limit);
exports.default = { genQuiz, genCustom, sendQuiz, genFakeQuiz, genFakeUser };
