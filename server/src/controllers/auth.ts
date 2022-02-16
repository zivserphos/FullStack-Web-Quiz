/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
import { Handler } from "express";
import AuthService from "../services/auth";

export const logout: Handler = async (req, res, next) => {
  if (!req.user) return res.redirect("/");
  await AuthService.logout(req.email).catch((err) => next(err));

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  req.session = null!;
  req.logout();
  return res.redirect("/sign-up");
};

const login: Handler = (_req, res) => res.redirect("/");

const loginJWT: Handler = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const tokens = await AuthService.login(email, password);
    return res.status(200).send(tokens);
  } catch (err) {
    return next(err);
  }
};

const signUp: Handler = async (req, res, next) => {
  const { email, first_name, last_name, password } = req.body;
  try {
    const user = await AuthService.signUpJWT({
      email,
      first_name,
      last_name,
      password,
    });
    console.log(user);
    return user
      ? res.status(200).send("added succesfully")
      : res.status(400).send("could not add user");
  } catch (err) {
    return next(err);
  }
};

export default { logout, login, loginJWT, signUp };
