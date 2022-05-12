"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose_1 = __importDefault(require("mongoose"));
const FakeQuizSchema = new mongoose_1.default.Schema({
    date: {
        type: Date,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    result: {
        type: Number,
    },
    questions: [
        {
            type: Object,
            default: "",
        },
    ],
});
// FakeQuizSchema.set("toJSON", {
//   transform: (_, returnedObject) => {
//     // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//     returnedObject.id = <string>returnedObject._id.toString();
//     delete returnedObject._id;
//   },
// });
const FakeQuiz = mongoose_1.default.model("FakeQuiz", FakeQuizSchema);
exports.default = FakeQuiz;
