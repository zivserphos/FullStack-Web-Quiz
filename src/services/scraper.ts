/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import cheerio from "cheerio";
import config from "../utils/config";

const scrapeImg = ($: cheerio.Root, elem: cheerio.Element) => {
  const logo = $(elem).find("img");
  // console.log(logo.attr("src"));
  // .find("div")
  // .first()
  // .find("div")
  // .first()
  // .find("img")
  // .attr("src");
  // console.log(logo);
};

const scrapeTags = ($: cheerio.Root, elem: cheerio.Element) => {
  const tags: string[] = [];
  $(elem)
    .find("h3")
    .siblings("div")
    .children()
    .each((_, tagElem) => tags.push($(tagElem).text()));
  console.log(tags);
};

const scrapeHeadLine = ($: cheerio.Root, elem: cheerio.Element) => {
  const headLine = $(elem).find("h2");
  // console.log(headLine.text());
};

const scrapeFromJob = ($: cheerio.Root, elem: cheerio.Element) => {
  const img = scrapeImg($, elem);
  const headLine = scrapeHeadLine($, elem);
  const tags = scrapeTags($, elem);
};

const mainScraper = async () => {
  const res = await axios.get(config.jobsUrl);

  const $ = cheerio.load(res.data);
  const jobs = $(".listResults > div").each((_, elem) =>
    scrapeFromJob($, elem)
  );
  console.log(jobs.length);
};

mainScraper();

export default mainScraper;
