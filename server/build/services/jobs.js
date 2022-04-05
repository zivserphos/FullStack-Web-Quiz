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
const sales_1 = __importDefault(require("../db/models/jobs/sales"));
const baceknd_developer_1 = __importDefault(require("../db/models/jobs/baceknd-developer"));
const fullstack_developer_1 = __importDefault(require("../db/models/jobs/fullstack-developer"));
const frontend_developer_1 = __importDefault(require("../db/models/jobs/frontend-developer"));
const devops_1 = __importDefault(require("../db/models/jobs/devops"));
const data_analyst_1 = __importDefault(require("../db/models/jobs/data-analyst"));
const getCorrectJobs = (jobTitle, _location, start) => __awaiter(void 0, void 0, void 0, function* () {
    if (jobTitle === "Sales")
        return sales_1.default.find().skip(Number(start)).limit(24);
    if (jobTitle === "Backend Developer")
        return baceknd_developer_1.default.find().skip(Number(start)).limit(24);
    if (jobTitle === "Frontend Developer")
        return frontend_developer_1.default.find().skip(Number(start)).limit(24);
    if (jobTitle === "fullstack developer")
        return fullstack_developer_1.default.find().skip(Number(start)).limit(24);
    if (jobTitle === "Devops Engineer")
        return devops_1.default.find().skip(Number(start)).limit(24);
    if (jobTitle === "Data Analyst")
        return data_analyst_1.default.find().skip(Number(start)).limit(24);
    throw Error;
});
exports.default = getCorrectJobs;
