const updateIfCorrect = (
  state: Quiz,
  index: number,
  optionSelected: number
): Quiz => {
  const updatedQuestions = [...state.questions];
  const isCorrect = optionSelected === updatedQuestions[index].correctAns;
  updatedQuestions[index] = { ...updatedQuestions[index], isCorrect };
  return {
    ...state,
    questions: updatedQuestions,
  };
};

const numOfCorrectAns = (state: Quiz) => ({
  questions: state.questions,
  numOfCorrectAns: state.questions.reduce(
    (num, question) => (question.isCorrect ? num + 1 : num),
    0
  ),
});

export default { updateIfCorrect, numOfCorrectAns };
