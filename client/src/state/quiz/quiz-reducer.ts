/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import * as actionTypes from "./quiz-types";
import questionService from "./helpers";

const INITIAL_STATE: Quiz = {
  questions: [],
  numOfCorrectAns: 0,
  isOnQuiz: false,
};

const quizReducer = (state = INITIAL_STATE, action: QuestionAction): Quiz => {
  switch (action.type) {
    case actionTypes.UPDATE_QUIZ:
      const { quiz } = action.payload;
      console.log("Hey");
      if (!quiz) return state;
      return quiz;

    case actionTypes.UPDATE_QUESTION:
      const { index, optionSelected } = action.payload;
      if ((!index && index !== 0) || !optionSelected) return state;
      return questionService.updateIfCorrect(state, index, optionSelected);

    case actionTypes.NUM_OF_CORRECT_ANS:
      return questionService.numOfCorrectAns(state);
    case actionTypes.IS_ON_QUIZ:
      const { bool } = action.payload;
      if (!bool) return state;
      return questionService.setIsOnQuiz(state, bool);
    default:
      return state;
  }
};
export default quizReducer;
