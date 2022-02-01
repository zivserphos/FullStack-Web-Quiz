const updateIfCorrect = (
  questions: Question[],
  index: number,
  optionSelected: number
): Question[] => {
  const updatedQuestions = [...questions];
  updatedQuestions[index].isCorrect =
    optionSelected === updatedQuestions[index].correctAns;
  return updatedQuestions;
};

const numOfCorrectAns = (questions: Question[]) =>
  questions.reduce((num, question) => (question.isCorrect ? num + 1 : num), 0);

export default { updateIfCorrect, numOfCorrectAns };
