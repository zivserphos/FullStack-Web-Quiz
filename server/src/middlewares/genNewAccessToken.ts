import { Handler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../utils/config/index";
import Token from "../db/models/Token";
import User from "../db/models/User";

const jwtError = () => ({
  status: 401,
  message: { error: "token missing or invalid" },
});

const genNewAccesToken: Handler = async (req, _res, next) => {
  try {
    const token = await Token.findOne({ accessToken: req.token });
    if (token) {
      const id = jwt.verify(token.refreshToken, config.secret) as JwtPayload;
      const user = await User.findById(id.userId);
      req.email = user.email;
      const updatedAccessToken = jwt.sign(
        { email: user.email, id: user.id },
        config.secret,
        {
          expiresIn: config.accessTime,
        }
      );
      req.token = updatedAccessToken;
      req.updateToken = true;
      return next();
    }
    return next(jwtError());
  } catch (err) {
    return next(jwtError());
  }
};

export default genNewAccesToken;
