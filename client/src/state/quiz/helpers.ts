const updateIfCorrect = (
  state: Quiz,
  index: number,
  optionSelected: Option
): Quiz => {
  const updatedQuestions = [...state.questions];
  const isCorrect = optionSelected === updatedQuestions[index].correctAns;
  updatedQuestions[index] = {
    ...updatedQuestions[index],
    isCorrect,
    optionSeleceted: optionSelected,
  };
  return {
    ...state,
    questions: updatedQuestions,
  };
};

const numOfCorrectAns = (state: Quiz) => ({
  isOnQuiz: true,
  questions: state.questions,
  numOfCorrectAns: state.questions.reduce(
    (num, question) => (question.isCorrect ? num + 1 : num),
    0
  ),
});

const setIsOnQuiz = (state: Quiz, bool: boolean) => ({
  ...state,
  isOnQuiz: bool,
});

export default { updateIfCorrect, numOfCorrectAns, setIsOnQuiz };
