"use strict";
// /* eslint-disable no-underscore-dangle */
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import { Handler } from "express";
// import User from "../../db/models/User";
// import config from "../../utils/config/index";
// // const logout: Handler = async (req, res) => {};
// const login: Handler = async (req, res) => {
//   const { userName, password } = req.body;
//   const user = await User.findOne({ userName });
//   const passwordCorrect =
//     user === null ? false : await bcrypt.compare(password, user.hashPassword);
//   if (!(user && passwordCorrect)) {
//     return res.status(401).json({
//       error: "invalid username or password",
//     });
//   }
//   const userForToken = {
//     username: user.username,
//     id: user._id,
//   };
//   const token = jwt.sign(userForToken, config.secret);
//   return res
//     .status(200)
//     .send({ token, username: user.username, name: user.name, id: user._id })
//     .redirect("/");
// };
// export default login;
