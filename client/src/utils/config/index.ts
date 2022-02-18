import dotenv from "dotenv";

dotenv.config();

export default {
  baseUrl: process.env.BASE_URL || "/",
  cookieKey: process.env.COOKIE_KEY || "IMLIVINGTHEDREAM",
};
