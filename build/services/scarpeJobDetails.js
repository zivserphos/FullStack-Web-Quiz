"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
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
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const scrapeAboutTheJob = ($, elem) => {
    console.log($(elem).html(), !!$);
};
const scrapeJobDetails = (url) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("zibi");
    const res = yield axios_1.default.get(url);
    const $ = cheerio_1.default.load(res.data);
    //   $(".job-details > span > p ").each((_, elem) => scrapeAboutTheJob($, elem));
    //   console.log("said");
    const a = $(".description__text").each((_, elem) => scrapeAboutTheJob($, elem));
});
scrapeJobDetails("https://www.linkedin.com/jobs/view/junior-front-end-developer-at-shield-2929155780/?trackingId=H9p3iXqm%2Bwtm7%2Fya%2FibaOQ%3D%3D&refId=kyA5EBf9gFy0tNzmJ1jRZg%3D%3D&pageNum=0&position=14&trk=public_jobs_jserp-result_search-card&originalSubdomain=il");
exports.default = scrapeJobDetails;
