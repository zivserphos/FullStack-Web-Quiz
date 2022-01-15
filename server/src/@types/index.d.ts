import "express";

declare global {
  namespace Express {
    interface Request {
      token: string;
    }
  }
}

// declare module "express-session" {
//   interface Session {
//     function destroy {
//       s
//     }
//   }
// }
