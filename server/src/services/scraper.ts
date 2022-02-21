import axios from "axios";
import cheerio from "cheerio";

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
  return jobs;
};

export default mainScraper;
