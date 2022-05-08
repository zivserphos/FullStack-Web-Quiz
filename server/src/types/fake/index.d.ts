interface FakeQuiz {
  date: Date;
  subject: string;
  result: number;
  questions: Question[];
}

interface FakeUser {
  email: string;
  date: Date;
}

interface FakeDateStats {
  date: Date;
}
