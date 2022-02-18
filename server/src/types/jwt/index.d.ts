declare global {
  namespace Jwt {
    interface JwtPayload {
      id: string;
    }
  }
}

declare global {
  interface ValidLogin {
    accessToken: string;
    refreshToken: string;
  }
}
export {};
