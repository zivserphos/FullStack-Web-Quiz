declare global {
  interface UserInt {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    verifiedEmail?: boolean;
    secret2FA?: string;
    googleId?: string;
    quizzes?: string[];
  }
  type NewUser = Omit<UserInt, "_id">;
}

export {};
