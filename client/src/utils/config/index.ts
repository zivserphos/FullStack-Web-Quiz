import dotenv from "dotenv";

dotenv.config();

export default {
  baseUrl: process.env.BASE_URL || "https://linkedin-quizzes.herokuapp.com/",
  cookieKey: process.env.COOKIE_KEY || "IMLIVINGTHEDREAM",
};
