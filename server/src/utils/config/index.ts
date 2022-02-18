import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3001,
  dbUrl: process.env.MONGO_URI || "",
  secret: process.env.SECRET || "secret",
  accessTime: process.env.ACCESS_TIME || "5m",
  refreshTime: process.env.REFRESH_TOKEN || "30m",
  googleSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  googleClientId: process.env.GOOGLE_CLIENT_ID || "",
  githubClientId: process.env.GITHUB_CLIENT_ID || "",
  githubSecret: process.env.GITHUB_CLIENT_SECRET || "",
  linkedinClientId: process.env.LINKEDIN_CLIENT_ID || "",
  linkedinSecret: process.env.LINKEDIN_SECRET || "",
  z_s_email: process.env.ZS_EMAIL || "",
  z_s_password: process.env.ZS_PASSWORD || "",
  cookieKey: process.env.COOKIE_KEY || "",
  baseUrl: process.env.BASE_URL || "http://localhost:3000",
  callbackURL: process.env.callbackURL || "http://localhost:3001",
};
