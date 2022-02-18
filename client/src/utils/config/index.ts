import dotenv from "dotenv";

dotenv.config();

export default {
  baseUrl: process.env.BASE_URL || "http://localhost:3001",
  cookieKey: process.env.COOKIE_KEY || "IMLIVINGTHEDREAM",
};
