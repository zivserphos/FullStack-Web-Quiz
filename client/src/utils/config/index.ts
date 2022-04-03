/* eslint-disable max-len */
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.REACT_APP_BASE_URL);

export default {
  baseUrl:
    process.env.REACT_APP_BASE_URL || "https://linkedin-quizzes.herokuapp.com",
  cookieKey: process.env.REACT_APP_COOKIE_KEY || "IMLIVINGTHEDREAM",
};
