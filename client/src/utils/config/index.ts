/* eslint-disable max-len */
import dotenv from "dotenv";

dotenv.config();

export default {
  baseUrl:
    process.env.REACT_APP_BASE_URL || "https://linkedin-quizzes.herokuapp.com",
  cookieKey: process.env.REACT_APP_COOKIE_KEY || "IMLIVINGTHEDREAM",
  jobs_url:
    "https://valid-cors.herokuapp.com/https://jobs.github.com/positions.json",
};
