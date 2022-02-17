import { Handler } from "express";
// import passport from "passport";
import apiService from "../services/api";

const quizError = { status: 400, message: { error: "could not save quiz" } };

export const sendQuiz: Handler = async (req, res, next) => {
  res.send(
    await apiService.sendQuiz(req.body.quiz, req.email).catch((err) => {
      console.log(err);
      next(quizError);
    })
  );
};

export const genQuiz: Handler = (req, res) => {
  // console.log(passport.session());
  res.send(apiService.genQuiz(req.params.subject));
};

export const genCustom: Handler = (req, res) =>
  res.send(apiService.genCustom(req.params.subject, Number(req.params.limit)));
