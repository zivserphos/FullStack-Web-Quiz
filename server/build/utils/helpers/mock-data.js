"use strict";
/* eslint-disable import/prefer-default-export */
// import FakeUser from "../../db/models/FakeUser";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizzesSubjects = void 0;
exports.quizzesSubjects = [
    "aws",
    "nodejs",
    "css",
    "git",
    "javascript",
    "lambda",
    "linux",
    "react",
    "java",
];
// const batchInsert = async (fakeQuizzes: FakeQuiz[]) => {
//   fakeQuizzes.forEach(async (fakeQuiz) => {
//     const result = await FakeQuizModel.insertMany(fakeQuiz);
//     console.log(`result: ${result}`);
//   });
// };
// const batchFakeUsers = async () => {
//   const fakeUsers = apiService.genFakeUser(13);
//   fakeUsers.forEach(async (fakeUser) => {
//     await FakeUser.insertMany(fakeUser);
//   });
// };
// batchFakeUsers();
// const genFakeQuizzes = async () =>
//   quizzesSubjects.forEach(async (quizSubject) => {
//     const fakeArr = new Array(4).fill("nothing");
//     const fakeQuizzes = fakeArr.map(() => apiService.genFakeQuiz(quizSubject));
//     await batchInsert(fakeQuizzes);
//   });
// genFakeQuizzes();
