import { ErrorRequestHandler } from "express";
import { JsonWebTokenError } from "jsonwebtoken";

const jwtError = () => ({
  status: 401,
  message: { error: "token missing or invalid" },
});

interface HttpError {
  status: number;
  message: string;
}

const errorHandler: ErrorRequestHandler = (
  err: HttpError | Error,
  _req,
  res,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next
) => {
  if (err instanceof JsonWebTokenError) return res.send(jwtError);
  return "status" in err
    ? res.status(err.status).send(err.message)
    : res.status(500).send("internal serverError");
};

export default errorHandler;
