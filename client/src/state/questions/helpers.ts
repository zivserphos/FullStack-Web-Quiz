const updateIfCorrect = (
  state: Quiz,
  index: number,
  optionSelected: number
): Quiz => {
  const updatedQuestions = [...state.questions];
  updatedQuestions[index].isCorrect =
    optionSelected === updatedQuestions[index].correctAns;
  return {
    questions: updatedQuestions,
    numOfCorrectAns: state.numOfCorrectAns,
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
