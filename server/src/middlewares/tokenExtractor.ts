import { Handler } from "express";

const jwtError = () => ({
  status: 401,
  message: { error: "token missing or invalid" },
});

const tokenExtractor: Handler = (req, _res, next) => {
  const authorization = req.get("authorization");
  if (!authorization || !authorization.toLowerCase().startsWith("bearer "))
    throw jwtError();
  req.token = authorization.substring(7);
  next();
};

export default tokenExtractor;
