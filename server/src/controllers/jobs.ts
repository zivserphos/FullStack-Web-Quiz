import { Handler } from "express";
import scraper from "../services/scraper";

const getJobs: Handler = async (req, res) => {
  const { jobTitle, location, start } = req.query;
  res.send(
    await scraper(jobTitle as string, location as string, Number(start))
  );
};

export default getJobs;
