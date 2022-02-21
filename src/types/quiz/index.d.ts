type Difficulty = "easy" | "medium" | "hard" | null;
type CorrectAns = 1 | 2 | 3 | 4;

declare global {
  interface Quiz {
    questions: fullQuestionData[];
    subject: string;
    result: number;
  }
}

declare global {
  interface Question {
    difficulty: Difficulty;
    query: string;
    code?: string;
    options: string[];
    correctAns: CorrectAns;
    optionsAsCode?: boolean;
    isCorrect?: boolean;
  }

  interface fullQuestionData {
    difficulty?: Difficulty;
    query: string;
    code?: string;
    options: string[];
    correctAns: CorrectAns;
    subject?: string;
    isCorrect?: boolean;
    optionsAsCode?: boolean;
  }
}

export {};
