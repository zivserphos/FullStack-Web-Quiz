import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import cookieSession from "cookie-session";
import morganHandler from "./middlewares/morgan";
import errorHandler from "./middlewares/errorHandlers";
import GoogleRouter from "./routes/googleRouter";
import "./utils/config/passport/google-setup";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.text());
app.use(
  morganHandler,
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);
app.use(
  cookieSession({
    name: "quiz-session",
    keys: ["key1", "key2"],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/google", GoogleRouter);

app.get("/", (_req, res) => {
  console.log("im here");
  res.send("hello world");
});

app.get("/failed", (_req, res) => {
  res.send("you failed to authenticate with google");
});

app.get("/good", (req, res) => res.send(`welcome mr. ${req.params}`));

app.use(errorHandler);

export default app;
