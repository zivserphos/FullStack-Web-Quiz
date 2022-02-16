declare global {
  interface UserInt {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    verifiedEmail?: boolean;
    secret2FA?: string;
    googleId?: string;
  }
  type NewUser = Omit<UserInt, "id">;
}

export {};
