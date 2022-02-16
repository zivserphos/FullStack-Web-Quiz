import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { Handler } from "express";
import User from "../db/models/User";
import config from "../utils/config/index";

const jwtError = () => ({
  status: 401,
  message: { error: "token missing or invalid" },
});

const userExtractor: Handler = async (req, _res, next) => {
  try {
    if (!req.token) next(jwtError());
    if (req.token) {
      const id = jwt.verify(req.token, config.secret);
      const user = await User.findById(id);
      req.user = user.userName;
    }
  } catch (err) {
    if (err instanceof JsonWebTokenError) next(jwtError);
  }
  next();
};
export default userExtractor;
