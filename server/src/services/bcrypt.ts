import bcrypt from "bcrypt";

const genHashPass = async (password) => bcrypt.hash(password, 10);
const compreHashPASS = async (hashPass, password) =>
  bcrypt.compare(password, hashPass);

export default { genHashPass, compreHashPASS };
