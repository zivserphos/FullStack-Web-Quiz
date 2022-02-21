declare global {
  namespace Express {
    interface Request {
      token?: string;
      email: string;
      updateToken?: boolean;
    }
    interface User {
      id?: string;
      email?: string;
    }
  }
}

export {};
