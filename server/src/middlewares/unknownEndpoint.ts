import { Handler, Response } from "express";

const unknownEndPoint: Handler = (_req, res: Response, next) => {
  res.redirect("/");
  next();
};

export default unknownEndPoint;
