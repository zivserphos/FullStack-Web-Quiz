declare global {
  interface Quiz {
    subject: string;
    difficulty: string;
    numOfQuestions: number;
    result: number;
    time: string;
  }
}

export {};
