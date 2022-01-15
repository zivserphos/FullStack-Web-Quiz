import "express";

declare global {
  namespace Express {
    interface Request {
      token: string;
    }
  }
}

// declare global {
//   interface session {
//     Session: null;
//   }
// }
