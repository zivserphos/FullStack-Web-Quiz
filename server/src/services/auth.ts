import { NewUser } from "../types/user";
import User from "../db/models/User";

const signUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
): Promise<boolean> => {
  //   const exists = await UserModel.find({ email });

  //   if (exists.length > 0) throw { status: 400, message: "email already exists" };

  const user: NewUser = await User.create({
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  });
  console.log(user);
  return !!user;
};

export default signUp;
