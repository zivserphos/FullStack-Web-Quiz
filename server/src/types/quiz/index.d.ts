type Difficulty = "Easy" | "Medium" | "Hard";
type CorrectAns = 1 | 2 | 3 | 4;

declare global {
  interface Quiz {
    subject: string;
    difficulty: Difficulty;
    numOfQuestions: number;
    result: number;
    time: string;
    userId?: string;
  }
}

declare global {
  interface Question {
    difficulty?: Difficulty;
    query: string;
    code?: string;
    options: string[];
    correctAns: CorrectAns;
    id: number;
  }
}

export {};
