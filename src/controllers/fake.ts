/* eslint-disable @typescript-eslint/no-unused-vars */
import { Handler } from "express";
import FakeUser from "../db/models/FakeUser";
import months from "../utils/config/months";

const mockError = {
  status: 400,
  message: { error: "could not fetch fake user data" },
};

const convertDataToStats = (data: any) =>
  months.map((month, i) => ({
    [month]: data.reduce((a, curr) => (curr.month === i + 1 ? a + 1 : a), 0),
  }));

const fakeUsersStat: Handler = async (_req, res, next) => {
  try {
    const userRegisteredDate: FakeDateStats[] = await FakeUser.find(
      {},
      { date: 1, _id: 0 }
    );
    res.send(
      convertDataToStats(
        userRegisteredDate.map((dateOfReg: FakeDateStats) => ({
          month: dateOfReg.date.getMonth(),
          day: dateOfReg.date.getDay(),
          dayOrNight: Number(dateOfReg.date.getHours()) >= 12,
        }))
      )
    );
  } catch (err) {
    console.log(err);
    next(mockError);
  }
};

export default fakeUsersStat;
