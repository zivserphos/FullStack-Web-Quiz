import { Handler } from "express";
import scraper from "../services/scraper";

const getJobs: Handler = (req, res) => {
  const { jobTitle, location, start } = req.params;
  res.send(scraper(jobTitle, location, Number(start)));
};

export default getJobs;
