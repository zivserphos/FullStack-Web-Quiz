/* eslint-disable no-case-declarations */
/* eslint-disable default-param-last */
import * as actionTypes from "./questions-types";
import questionService from "./helpers";

const INITIAL_STATE: Quiz | null = null;

const songReducer = (
  state = INITIAL_STATE,
  action: QuestionAction
): Quiz | null => {
  switch (action.type) {
    case actionTypes.UPDATE_QUIZ:
      const { quiz } = action.payload;
      if (!quiz) return state;
      return quiz;

    case actionTypes.UPDATE_QUESTION:
      const { index, optionSelected } = action.payload;
      if (!index || !optionSelected || !state) return state;
      return questionService.updateIfCorrect(state, index, optionSelected);

    case actionTypes.NUM_OF_CORRECT_ANS:
      if (!state) return state;
      return questionService.numOfCorrectAns(state);
    default:
      return state;
  }
};
export default songReducer;
