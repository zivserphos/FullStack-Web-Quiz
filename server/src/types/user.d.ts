declare global {
  interface UserInt {
    id: string;
    first_name;
    last_name;
    email: string;
    password: string;
    verifiedEmail?: boolean;
    secret2FA?: string;
    googleId?: string;
  }
  type NewUser = Omit<UserInt, "id">;
}

export {};
