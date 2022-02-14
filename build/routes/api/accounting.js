"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import fs from "fs";
// import path from "path";
const router = (0, express_1.Router)();
// const fileName = __filename.split("api\\")[1].split(".ts")[0];
// const contentFile = JSON.parse(
//   fs.readFileSync(`./src/db/questions/${fileName}.json`).toString()
// );
// const fileCopy = [...contentFile];
// const quiz = [];
// for (let i = 0; i < 15; i += 1) {
//   const randomNum = Math.floor(Math.random() * fileCopy.length);
//   quiz.push(fileCopy[randomNum]);
//   fileCopy.splice(randomNum, 1);
// }
exports.default = router;
