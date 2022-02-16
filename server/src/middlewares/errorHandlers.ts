import { ErrorRequestHandler } from "express";

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
  console.log(err);
  return "status" in err
    ? res.status(err.status).send(err.message)
    : res.status(500).send("internal serverError");
};

export default errorHandler;
