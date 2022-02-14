import * as questionsTypes from "./quiz-types";

export {};

export const updateQuiz = (quiz: Quiz) => ({
  type: questionsTypes.UPDATE_QUIZ,
  payload: {
    quiz,
  },
});

export const updateQuestion = (index: number, optionSelected: Option) => ({
  type: questionsTypes.UPDATE_QUESTION,
  payload: {
    index,
    optionSelected,
  },
});

export const numOfCorrectAns = () => ({
  type: questionsTypes.NUM_OF_CORRECT_ANS,
  payload: {},
});

export const setIsOnQuiz = (bool: boolean) => ({
  type: questionsTypes.IS_ON_QUIZ,
  payload: {
    bool,
  },
});
