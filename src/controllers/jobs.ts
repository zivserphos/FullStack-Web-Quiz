import { Handler } from "express";
import scraper from "../services/scraper";

const getJobs: Handler = async (req, res, next) => {
  try {
    const { jobTitle, location, start } = req.query;
    res.send(
      await scraper(jobTitle as string, location as string, Number(start))
    );
  } catch (err) {
    next({
      status: 503,
      message: { error: "Services Currently not Available" },
    });
  }
};

export default getJobs;
