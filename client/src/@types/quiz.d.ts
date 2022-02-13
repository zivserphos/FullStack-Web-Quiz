type Option = 0 | 1 | 2 | 3 | 4;
type CorrectAns = 1 | 2 | 3 | 4;

type Difficulty = "Easy" | "Medium" | "Hard";

interface CheckBoxProps {
  options: string[];
  sendAns?: (optionSelected: Option) => void;
  displayAns?: CorrectAns;
  index?: number;
  optionsAsCode?: boolean;
}

interface Question {
  difficulty?: Difficulty;
  query: string;
  code?: string;
  options: string[];
  correctAns: CorrectAns;
  subject?: string;
  isCorrect?: boolean;
  optionsAsCode?: boolean;
}

interface QuestionAction {
  type: "UPDATE_QUIZ" | "UPDATE_QUESTION" | "NUM_OF_CORRECT_ANS";
  payload: {
    quiz?: Quiz;
    index?: number;
    optionSelected?: Option;
  };
}

interface Quiz {
  questions: Question[];
  numOfCorrectAns: number;
}
