declare global {
  interface Token {
    accessToken: string;
    refreshToken: string;
    userId: string;
  }
}

export {};
