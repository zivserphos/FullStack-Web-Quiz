"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose_1 = __importDefault(require("mongoose"));
const QuizSchema = new mongoose_1.default.Schema({
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
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        default: "",
        required: true,
    },
});
QuizSchema.set("toJSON", {
    transform: (_, returnedObject) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
    },
});
const User = mongoose_1.default.model("Quiz", QuizSchema);
exports.default = User;
