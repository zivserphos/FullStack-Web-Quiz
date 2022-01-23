interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  verifiedEmail: boolean;
  secret2FA?: string;
}

export default User;
