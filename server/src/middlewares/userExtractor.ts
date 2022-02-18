/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt, { JwtPayload } from "jsonwebtoken";
import { Handler } from "express";
import User from "../db/models/User";
import config from "../utils/config/index";
import genNewAccesToken from "./genNewAccessToken";

const jwtError = () => ({
  status: 401,
  message: { error: "token missing or invalid" },
});

const userExtractor: Handler = async (req, res, next) => {
  try {
    if (!req.token) next(jwtError());
    if (req.token) {
      const id = jwt.verify(req.token, config.secret) as JwtPayload;
      const user = await User.findById(id.userId);
      req.email = user.email;
      next();
    }
  } catch (err) {
    genNewAccesToken(req, res, next);
  }
};
export default userExtractor;
