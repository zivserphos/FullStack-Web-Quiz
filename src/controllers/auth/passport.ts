import { Handler } from "express";

const logout: Handler = (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  req.session = null!;
  req.logout();
  res.redirect("/sign-up");
};

const signIn: Handler = (_req, res) => res.redirect("/");

export default { logout, signIn };
