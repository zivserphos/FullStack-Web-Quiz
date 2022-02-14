export const updateIfCorrect = (
  questions: Question[],
  index: number,
  optionSelected: number
): Question[] => {
  const updatedQuestions = [...questions];
  updatedQuestions[index].isCorrect =
    optionSelected === updatedQuestions[index].correctAns;
  return updatedQuestions;
};

export const numOfCorrectAns = (questions: Question[]) =>
  questions.reduce((num, question) => (question.isCorrect ? num + 1 : num), 0);

const scores = [
  "Go take that badge from linkedin! you rock that quiz",
  "You're almost there, wont you take one more quiz?",
  "probably need bit more learning before you try linkedin...",
  "It's ok, youre on your way to the top ,keep focusing",
];

export const genScores = (i: number) => {
  if (i < 4) return scores[3];
  if (i < 9) return scores[2];
  if (i < 13) return scores[1];
  return scores[0];
};
