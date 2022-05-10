/* eslint-disable @typescript-eslint/no-unused-vars */
import { Handler } from "express";
import FakeUser from "../db/models/FakeUser";
import FakeQuiz from "../db/models/FakeQuiz";
import months from "../utils/config/months";

const mockError = (cause: string) => ({
  status: 400,
  message: { error: cause },
});

const convertDataToStats = (data: any) =>
  months.map((month, i) => ({
    [month]: data.reduce((a, curr) => (curr.month === i + 1 ? a + 1 : a), 0),
  }));

export const fakeUsersStats: Handler = async (_req, res, next) => {
  try {
    const userRegisteredDate: FakeDateStats[] = await FakeUser.find(
      {},
      { date: 1, _id: 0 }
    );
    return res.send(
      convertDataToStats(
        userRegisteredDate.map((dateOfReg: FakeDateStats) => ({
          month: dateOfReg.date.getMonth(),
          day: dateOfReg.date.getDay(),
          dayOrNight: Number(dateOfReg.date.getHours()) >= 12,
        }))
      )
    );
  } catch (err) {
    return next(mockError("could not fetch fake user data"));
  }
};

export const fakeQuizzesDetails: Handler = async (_req, res, next) => {
  try {
    const quizzesTakenData = await FakeQuiz.find(
      {},
      { subject: 1, result: 1, date: 1, _id: 0 }
    );
    return res.send(quizzesTakenData);
  } catch (err) {
    console.log(err);
    return next(mockError("could not fetch fake quizzes data"));
  }
};
