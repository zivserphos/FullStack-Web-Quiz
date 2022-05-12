/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import fs from "fs";
import QuizModel from "../db/models/Quiz";
import User from "../db/models/User";
import FakeQuiz from "../db/models/FakeQuiz";
import { quizzesSubjects } from "../utils/helpers/mock-data";

const sendQuiz = async (quiz: Quiz, userEmail: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = await User.findOne({ email: userEmail });
  const savedQuiz = await QuizModel.create({
    userId: user._id,
    result: quiz.result,
    subject: quiz.subject,
    questions: quiz.questions,
  });
  const userQuizzes = [...(user.quizzes || [])];
  user.quizzes = [userQuizzes.concat(savedQuiz._id)];
  user.save();
  const fakeSubject = quizzesSubjects[Math.random() * quizzesSubjects.length];
  await FakeQuiz.insertMany({
    subject: fakeSubject,
    result: Math.random() > 0.82 ? 15 : Math.ceil(Math.random() * 14),
    date: new Date(),
    questions: genQuiz(fakeSubject),
  });
};

const genQuestions = (subject: string, limit: number) => {
  const contentFile = JSON.parse(
    fs.readFileSync(`./src/db/questions/${subject}.json`).toString()
  );

  const fileCopy = [...contentFile];
  const quiz: Question[] = [];
  for (let i = 0; i < limit; i += 1) {
    const randomNum = Math.floor(Math.random() * fileCopy.length);
    quiz.push(fileCopy[randomNum]);
    fileCopy.splice(randomNum, 1);
  }
  return quiz;
};

const genQuiz = (subject: string) => genQuestions(subject, 15);
const genCustom = (subject: string, limit: number) =>
  genQuestions(subject, limit);

export default { genQuiz, genCustom, sendQuiz };
