type Option = 0 | 1 | 2 | 3 | 4;
type CorrectAns = 1 | 2 | 3 | 4;

type Difficulty = "Easy" | "Medium" | "Hard";

interface CheckBoxProps {
  options: string[];
  sendAns?: (optionSelected: Option) => void;
  displayAns?: CorrectAns;
}

interface Question {
  difficulty?: Difficulty;
  query: string;
  code?: string;
  options: string[];
  correctAns: CorrectAns;
  subject?: string;
  isCorrect?: boolean;
}
