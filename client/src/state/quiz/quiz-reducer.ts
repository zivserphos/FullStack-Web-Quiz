/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import * as actionTypes from "./quiz-types";
import questionService from "./helpers";

const INITIAL_STATE: Quiz = {
  questions: [],
  numOfCorrectAns: 0,
};

const quizReducer = (state = INITIAL_STATE, action: QuestionAction): Quiz => {
  switch (action.type) {
    case actionTypes.UPDATE_QUIZ:
      const { quiz } = action.payload;
      if (!quiz) return state;
      return quiz;

    case actionTypes.UPDATE_QUESTION:
      const { index, optionSelected } = action.payload;
      if (!index || !optionSelected) return state;
      return questionService.updateIfCorrect(state, index, optionSelected);

    case actionTypes.NUM_OF_CORRECT_ANS:
      return questionService.numOfCorrectAns(state);
    default:
      return state;
  }
};
export default quizReducer;
