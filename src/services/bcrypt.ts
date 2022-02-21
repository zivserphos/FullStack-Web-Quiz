import bcrypt from "bcrypt";

const genHashPass = async (password: string) => bcrypt.hash(password, 10);
const compreHashPASS = async (hashPass: string, password: string) =>
  bcrypt.compare(password, hashPass);

export default { genHashPass, compreHashPASS };
