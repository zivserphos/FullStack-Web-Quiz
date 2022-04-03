import axios from "axios";
import cheerio from "cheerio";
import FullStackDeveloperModel from "../../db/models/jobs/fullstack-deceloper";
import DataAnalystModel from "../../db/models/jobs/data-analyst";
import DevopsModel from "../../db/models/jobs/devops";
import BackendDeveloperModel from "../../db/models/jobs/baceknd-developer";
import FrontendDeveloperModel from "../../db/models/jobs/frontend-developer";
import SalesModel from "../../db/models/jobs/sales";

const jobTitles = [
  "Fullstack developer",
  "Data Analyst",
  "Devops Engineer",
  "Backend Developer",
  "Frontend Developer",
  "Sales",
];

const genUrlToscrape = (jobTitle: string, location: string, start = 0) =>
  `https://www.linkedin.com/jobs/search?keywords=${jobTitle.replace(
    " ",
    "+"
  )}&location=${location
    .replace(" ", "+")
    .replace(
      ",",
      "%2C"
    )}&geoId?trk=homepage-jobseeker_job-search-link&start=${start}`;

const scrapeImg = ($: cheerio.Root, elem: cheerio.Element) =>
  $(elem)
    .find(".search-entity-media")
    .children()
    .first()
    .attr("data-delayed-url") || "";

const scrapeHeadLine = ($: cheerio.Root, elem: cheerio.Element) =>
  $(elem).find("h3").text().trim();

const scrapeLocation = ($: cheerio.Root, elem: cheerio.Element) =>
  $(elem).find(".job-search-card__location").text().trim();

const scrapeCompanyName = ($: cheerio.Root, elem: cheerio.Element) =>
  $(elem).find("h4").text().trim();

const scrapeCompanyInfo = ($: cheerio.Root, elem: cheerio.Element) =>
  $(elem).find("a").attr("href") || "";

const scrapeFromJob = ($: cheerio.Root, elem: cheerio.Element): Job => ({
  img: scrapeImg($, elem),
  headLine: scrapeHeadLine($, elem),
  location: scrapeLocation($, elem),
  companyName: scrapeCompanyName($, elem),
  companyInfo: scrapeCompanyInfo($, elem),
});

const mainScraper = async (
  jobTitle: string,
  location: string,
  start: number
) => {
  const res = await axios.get(genUrlToscrape(jobTitle, location, start));
  const $ = cheerio.load(res.data);
  const jobs: Job[] = [];
  $(".jobs-search__results-list > li > div ").each((_, elem) =>
    jobs.push(scrapeFromJob($, elem))
  );
  console.log("shit shit hsit");
  console.log(jobs.length);
  return jobs;
};

export default mainScraper;

jobTitles.forEach(async (jobTitle) => {
  const firstJobs = mainScraper(jobTitle, "israel", 0);
  const secondJobs = mainScraper(jobTitle, "israel", 24);
  if (jobTitle === "Fullstack developer") {
    await FullStackDeveloperModel.insertMany(firstJobs);
    await FullStackDeveloperModel.insertMany(secondJobs);
  }
  if (jobTitle === "Data Analyst") {
    await DataAnalystModel.insertMany(firstJobs);
    await DataAnalystModel.insertMany(secondJobs);
  }
  if (jobTitle === "Devops Engineer") {
    await DevopsModel.insertMany(firstJobs);
    await DevopsModel.insertMany(secondJobs);
  }
  if (jobTitle === "Backend Developer") {
    await BackendDeveloperModel.insertMany(firstJobs);
    await BackendDeveloperModel.insertMany(secondJobs);
  }
  if (jobTitle === "Frontend developer") {
    await FrontendDeveloperModel.insertMany(firstJobs);
    await FrontendDeveloperModel.insertMany(secondJobs);
  }
  if (jobTitle === "Sales") {
    await SalesModel.insertMany(firstJobs);
    await SalesModel.insertMany(secondJobs);
  }
});
