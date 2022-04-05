"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose_1 = __importDefault(require("mongoose"));
const DevopsSchema = new mongoose_1.default.Schema({
    img: {
        type: String,
        required: true,
    },
    headLine: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    companyInfo: {
        type: String,
    },
});
DevopsSchema.set("toJSON", {
    transform: (_, returnedObject) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
    },
});
const Devops = mongoose_1.default.model("jobs-devops", DevopsSchema);
exports.default = Devops;
