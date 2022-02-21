import { Handler } from "express";
import apiService from "../services/api";
import config from "../utils/config";

const quizError = { status: 400, message: { error: "could not save quiz" } };

export const sendQuiz: Handler = async (req, res, next) => {
  res.send(
    await apiService.sendQuiz(req.body.quiz, req.email).catch(() => {
      next(quizError);
    })
  );
};

export const genQuiz: Handler = (req, res) => {
  if (req.updateToken) res.cookie(config.cookieKey, req.token);
  res.send(apiService.genQuiz(req.params.subject));
};

export const genCustom: Handler = (req, res) =>
  res.send(apiService.genCustom(req.params.subject, Number(req.params.limit)));
