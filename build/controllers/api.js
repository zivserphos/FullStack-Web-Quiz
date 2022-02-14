"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genCustom = exports.genQuiz = void 0;
const api_1 = __importDefault(require("../services/api"));
const genQuiz = (req, res) => res.send(api_1.default.genQuiz(req.params.subject));
exports.genQuiz = genQuiz;
const genCustom = (req, res) => res.send(api_1.default.genCustom(req.params.subject, Number(req.params.limit)));
exports.genCustom = genCustom;
