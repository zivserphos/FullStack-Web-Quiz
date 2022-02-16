import bcrypt from "bcrypt";

const genHashPass = async (password) => bcrypt.hash(password, 10);
const compreHashPASS = async (hashPass, password) =>
  bcrypt.compare(hashPass, password);

export default { genHashPass, compreHashPASS };
