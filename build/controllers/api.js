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
exports.genCustom = exports.genQuiz = exports.sendQuiz = void 0;
// import passport from "passport";
const api_1 = __importDefault(require("../services/api"));
const config_1 = __importDefault(require("../utils/config"));
const quizError = { status: 400, message: { error: "could not save quiz" } };
const sendQuiz = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield api_1.default.sendQuiz(req.body.quiz, req.email).catch(() => {
        next(quizError);
    }));
});
exports.sendQuiz = sendQuiz;
const genQuiz = (req, res) => {
    if (req.updateToken)
        res.cookie(config_1.default.cookieKey, req.token);
    res.send(api_1.default.genQuiz(req.params.subject));
};
exports.genQuiz = genQuiz;
const genCustom = (req, res) => res.send(api_1.default.genCustom(req.params.subject, Number(req.params.limit)));
exports.genCustom = genCustom;
