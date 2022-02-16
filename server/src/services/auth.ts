/* eslint-disable no-throw-literal */
/* eslint-disable no-shadow */
import jwt from "jsonwebtoken";
import validator from "email-validator";
import config from "../utils/config/index";
import Token from "../db/models/Token";
import UserModel from "../db/models/User";
import bcryptService from "./bcrypt";

const badRequest = (cause: string) => ({
  status: 400,
  message: { error: cause },
});
const conflict = (cause: string) => ({
  status: 409,
  message: { error: cause },
});

const login = async (email: string, password: string): Promise<ValidLogin> => {
  const user: UserInt | null = await UserModel.findOne({ email });

  if (!user) throw { status: 400, message: "No such email or username" };
  if (!(await bcryptService.compreHashPASS(user.password, password)))
    throw { status: 400, message: "Bad password" };

  const userId = user.id;

  const accessToken = jwt.sign({ email, userId }, config.secret, {
    expiresIn: config.accessTime,
  });

  const refreshToken = jwt.sign({ userId, email }, config.secret, {
    expiresIn: config.refreshTime,
  });

  await Token.findOneAndUpdate(
    { userId },
    { jwt: refreshToken, userId },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  return { accessToken, refreshToken };
};

const logout = async (userId: string): Promise<boolean> => {
  const { deletedCount } = await Token.deleteOne({ userId });
  return deletedCount > 0;
};

const signUpWithPassport = async ({
  firstName,
  lastName,
  email,
  password,
}: NewUser): Promise<UserInt> => {
  const exists = await UserModel.find({ email });

  if (exists.length > 0) throw { status: 400, message: "email already exists" };
  const hashPassword = await bcryptService.genHashPass(password);

  const user: UserInt = await UserModel.create({
    first_name: firstName,
    last_name: lastName,
    email,
    hashPassword,
  });
  return user;
};

const signUpJWT = async (email: string, username: string, password: string) => {
  if (!username || !email || !password) {
    throw badRequest("missing parameters");
  }
  if (username.trim().length < 3 || password.trim().length < 3) {
    throw badRequest("Username or password too short");
  }
  if (!validator.validate(email)) throw badRequest("Invalid email");
  const exists = await UserModel.find({ email });
  if (exists.length > 0) throw conflict("email already exists");

  const hashPassword = await bcryptService.genHashPass(password);
  const user: UserInt = await UserModel.create({
    username,
    email,
    hashPassword,
  });
  return user;
  // res.status(201).send(result);
};

export default {
  signUpWithPassport,
  login,
  signUpJWT,
  logout,
};
