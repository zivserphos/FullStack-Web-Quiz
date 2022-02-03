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
// export const updateSong = (song: Song) => ({
//   type: songTypes.UPDATE_SONG,
//   payload: {
//     song,
//   },
// });

// export const updateTime = (seconds: number) => ({
//   type: songTypes.UPDATE_TIME,
//   payload: {
//     seconds,
//   },
// });

// export const updateCursor = (updatedCursor: number) => ({
//   type: songTypes.UPDATE_CURSOR,
//   payload: {
//     updatedCursor,
//   },
// });

// export const updateLoop = () => ({
//   type: songTypes.UPDATE_LOOP,
//   payload: {},
// });
