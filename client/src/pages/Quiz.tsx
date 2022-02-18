/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import MyModal from "../components/modal/Modal";
import "./styles/quiz.scss";
import CheckBox from "../components/Checkbox/CheckBox";
import {
  updateQuiz,
  numOfCorrectAns,
  updateQuestion,
  setIsOnQuiz,
} from "../state/quiz/quiz-actions";
import config from "../utils/config/index";

const Quiz = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subject } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [displayQuestionIndex, setDisplayQuestionIndex] =
    useState<boolean>(true);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [displayResult, setDisplayResult] = useState<boolean>(false);
  const quiz = useSelector((state: Quiz) => state);

  window.onbeforeunload = (event) => {
    const e = event || window.event;
    // Cancel the event
    e.preventDefault();
    if (e) {
      e.returnValue = ""; // Legacy method for cross browser support
    }
    return ""; // Legacy method for cross browser support
  };

  const sendAns = (optionSelected: Option) => {
    dispatch(updateQuestion(currentQuestion, optionSelected));
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = (optionSelected: Option) => {
    dispatch(updateQuestion(currentQuestion, optionSelected));
    setCurrentQuestion((prev) => prev - 1);
  };

  const sendQuiz = async () => {
    setDisplayQuestionIndex(false);
    dispatch(numOfCorrectAns()); // update correct answers globally
    dispatch(setIsOnQuiz(false));
    setDisplayResult(true);
    await axios.post(
      `${config.baseUrl}/api/send-quiz`,
      {
        quiz: {
          questions: quiz.questions.slice(4),
          result: 5,
          subject,
        },
      },
      {
        headers: {
          authorization: `bearer ${Cookies.get(config.cookieKey)}`,
          "Content-Type": "application/json",
        },
      }
    );
  };

  useEffect(() => {
    const initialQuiz = async () => {
      console.log(Cookies.get("quiz-session.sig"));
      const quizQuestions = await axios.get(
        `${config.baseUrl}/api/${subject}`,
        {
          headers: {
            authorization: `bearer ${Cookies.get(config.cookieKey)}`,
          },
        }
      );
      if (quizQuestions.data.length === 15) {
        dispatch(
          updateQuiz({
            questions: quizQuestions.data,
            numOfCorrectAns: 0,
            isOnQuiz: true,
          })
        );
        setQuestions(quizQuestions.data || []);
      }
    };
    initialQuiz();
  }, [dispatch, navigate, subject]);

  return questions ? (
    <div className="quiz">
      <div>
        <h1>{questions[currentQuestion]?.query || ""}</h1>
        <div className="display-code">
          {questions[currentQuestion]?.code ? (
            <h2>
              <code>{questions[currentQuestion]?.code}</code>
            </h2>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <CheckBox
          correctAns={questions[currentQuestion]?.correctAns}
          options={questions[currentQuestion]?.options || ""}
          sendAns={currentQuestion === 4 ? sendQuiz : sendAns}
          index={currentQuestion}
          optionsAsCode={questions[currentQuestion]?.optionsAsCode}
          prevQuestion={prevQuestion}
          asQuestion
        />
        <h1
          className="current-question"
          style={{ display: displayQuestionIndex ? "block" : "none" }}
        >
          Q. {currentQuestion + 1}/15
        </h1>
        <div style={{ display: displayResult ? "block" : "none" }}>
          {displayResult ? <MyModal /> : ""}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <h1>Could Not Upload Quiz , Please Try Again In A Minute</h1>
      <button type="button" onClick={() => navigate("/")}>
        Return To Main Menu
      </button>
    </div>
  );
};

export default Quiz;
