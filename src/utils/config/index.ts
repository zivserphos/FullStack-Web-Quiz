import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3001,
  dbUrl: process.env.MONGO_URI || "",
  secret: process.env.SECRET || "secret",
  accessTime: process.env.ACCESS_TIME || "5m",
};
