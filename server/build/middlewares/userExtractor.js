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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../db/models/User"));
const index_1 = __importDefault(require("../utils/config/index"));
const genNewAccessToken_1 = __importDefault(require("./genNewAccessToken"));
const jwtError = () => ({
    status: 401,
    message: { error: "token missing or invalid" },
});
const userExtractor = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.token)
            next(jwtError());
        if (req.token) {
            const id = jsonwebtoken_1.default.verify(req.token, index_1.default.secret);
            const user = yield User_1.default.findById(id.userId);
            req.email = user.email;
            next();
        }
    }
    catch (err) {
        (0, genNewAccessToken_1.default)(req, res, next);
    }
});
exports.default = userExtractor;
