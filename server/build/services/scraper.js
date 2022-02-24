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
const axios_1 = __importDefault(require("axios"));
const cheerio_1 = __importDefault(require("cheerio"));
const genUrlToscrape = (jobTitle, location, start = 0) => `https://www.linkedin.com/jobs/search?keywords=${jobTitle.replace(" ", "+")}&location=${location
    .replace(" ", "+")
    .replace(",", "%2C")}&geoId?trk=homepage-jobseeker_job-search-link&start=${start}`;
const scrapeImg = ($, elem) => $(elem)
    .find(".search-entity-media")
    .children()
    .first()
    .attr("data-delayed-url") || "";
const scrapeHeadLine = ($, elem) => $(elem).find("h3").text().trim();
const scrapeLocation = ($, elem) => $(elem).find(".job-search-card__location").text().trim();
const scrapeCompanyName = ($, elem) => $(elem).find("h4").text().trim();
const scrapeCompanyInfo = ($, elem) => $(elem).find("a").attr("href") || "";
const scrapeFromJob = ($, elem) => ({
    img: scrapeImg($, elem),
    headLine: scrapeHeadLine($, elem),
    location: scrapeLocation($, elem),
    companyName: scrapeCompanyName($, elem),
    companyInfo: scrapeCompanyInfo($, elem),
});
const mainScraper = (jobTitle, location, start) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.get(genUrlToscrape(jobTitle, location, start));
    console.log(genUrlToscrape(jobTitle, location, start));
    const $ = cheerio_1.default.load(res.data);
    const jobs = [];
    $(".jobs-search__results-list > li > div ").each((_, elem) => jobs.push(scrapeFromJob($, elem)));
    return jobs;
});
exports.default = mainScraper;
