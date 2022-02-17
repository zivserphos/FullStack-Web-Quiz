import fs from "fs";
import QuizModel from "../db/models/Quiz";

const sendQuiz = async (quiz: Quiz, userEmail: string) => {
  const userId = await QuizModel.find({ email: userEmail });
  await QuizModel.create({
    userId,
    result: quiz.result,
    subject: quiz.subject,
    questions: quiz.questions,
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
