import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import MyModal from "../components/modal/Modal";
import "./styles/quiz.scss";
import CheckBox from "../components/Checkbox/CheckBox";
import {
  updateQuiz,
  numOfCorrectAns,
  updateQuestion,
} from "../state/quiz/quiz-actions";
import config from "../utils/config/index";

const Quiz = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subject } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [displayResult, setDisplayResult] = useState<boolean>(false);

  const sendAns = (optionSelected: Option) => {
    dispatch(updateQuestion(currentQuestion, optionSelected));
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = (optionSelected: Option) => {
    dispatch(updateQuestion(currentQuestion, optionSelected));
    setCurrentQuestion((prev) => prev - 1);
  };

  const sendQuiz = () => {
    dispatch(numOfCorrectAns()); // update correct answers globally
    setDisplayResult(true);
  };

  useEffect(() => {
    const initialQuiz = async () => {
      const quizQuestions = await axios.get(`${config.baseUrl}/api/${subject}`);
      console.log(quizQuestions.data.length);
      if (quizQuestions.data.length === 15) {
        dispatch(
          updateQuiz({
            questions: quizQuestions.data,
            numOfCorrectAns: 0,
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
          options={questions[currentQuestion]?.options || ""}
          sendAns={currentQuestion === 14 ? sendQuiz : sendAns}
          index={currentQuestion}
          optionsAsCode={questions[currentQuestion]?.optionsAsCode}
          prevQuestion={prevQuestion}
        />
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
