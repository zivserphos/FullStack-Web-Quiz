/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from "axios";
import cheerio from "cheerio";

const scrapeAboutTheJob = ($: cheerio.Root, elem: cheerio.Element) => {
  console.log($(elem).html(), !!$);
};

const scrapeJobDetails = async (url: string) => {
  console.log("zibi");
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);
  //   $(".job-details > span > p ").each((_, elem) => scrapeAboutTheJob($, elem));
  //   console.log("said");
  const a = $(".description__text").each((_, elem) =>
    scrapeAboutTheJob($, elem)
  );
};

scrapeJobDetails(
  "https://www.linkedin.com/jobs/view/junior-front-end-developer-at-shield-2929155780/?trackingId=H9p3iXqm%2Bwtm7%2Fya%2FibaOQ%3D%3D&refId=kyA5EBf9gFy0tNzmJ1jRZg%3D%3D&pageNum=0&position=14&trk=public_jobs_jserp-result_search-card&originalSubdomain=il"
);

export default scrapeJobDetails;
