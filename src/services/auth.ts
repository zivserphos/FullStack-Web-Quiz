import { NewUser, UserInt } from "../types/user";
import User from "../db/models/User";
import bcryptService from "./bcrypt";

const badRequest = (cause: string) => ({
  status: 400,
  message: { error: cause },
});
const conflict = (cause: string) => ({
  status: 409,
  message: { error: cause },
});

const signUp = async ({
  firstName,
  lastName,
  email,
  password,
}: NewUser): Promise<UserInt> => {
  //   const exists = await UserModel.find({ email });

  //   if (exists.length > 0) throw { status: 400, message: "email already exists" };

  const user: UserInt = await User.create({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });
  return user;
};

export const createUser = async (
  name: string,
  userName: string,
  password: string
) => {
  if (!userName || !name || !password) {
    throw badRequest("missing parameters");
  }
  if (userName.trim().length < 3 || password.trim().length < 3) {
    throw badRequest("Username or password too short");
  }

  if (await User.findOne({ userName }))
    throw conflict("userName already exist");
  const hashPassword = await bcryptService.genHashPass(password);
  const newUser = new User({ name, userName, hashPassword });
  return newUser.save();
  // res.status(201).send(result);
};

export default signUp;
