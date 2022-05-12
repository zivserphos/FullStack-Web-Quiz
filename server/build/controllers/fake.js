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
exports.fakeQuizzesDetails = exports.fakeUsersStats = void 0;
const FakeUser_1 = __importDefault(require("../db/models/FakeUser"));
const FakeQuiz_1 = __importDefault(require("../db/models/FakeQuiz"));
const months_1 = __importDefault(require("../utils/config/months"));
const mockError = (cause) => ({
    status: 400,
    message: { error: cause },
});
const convertDataToStats = (data) => months_1.default.map((month, i) => ({
    [month]: data.reduce((a, curr) => (curr.month === i + 1 ? a + 1 : a), 0),
}));
const fakeUsersStats = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRegisteredDate = yield FakeUser_1.default.find({}, { date: 1, _id: 0 });
        return res.send(convertDataToStats(userRegisteredDate.map((dateOfReg) => ({
            month: dateOfReg.date.getMonth(),
            day: dateOfReg.date.getDay(),
            dayOrNight: Number(dateOfReg.date.getHours()) >= 12,
        }))));
    }
    catch (err) {
        return next(mockError("could not fetch fake user data"));
    }
});
exports.fakeUsersStats = fakeUsersStats;
const fakeQuizzesDetails = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizzesTakenData = yield FakeQuiz_1.default.find({}, { subject: 1, result: 1, date: 1, _id: 0 });
        return res.send(quizzesTakenData);
    }
    catch (err) {
        console.log(err);
        return next(mockError("could not fetch fake quizzes data"));
    }
});
exports.fakeQuizzesDetails = fakeQuizzesDetails;
