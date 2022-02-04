/* eslint-disable no-unused-expressions */
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

const Quiz = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { subject } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [correctAns, setCorrectAns] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [displayResult, setDisplayResult] = useState<boolean>(false);

  const sendAns = (optionSelected: Option) => {
    console.log(currentQuestion, optionSelected);
    // setQuestions(
    //   quizService.updateIfCorrect(questions, currentQuestion, optionSelected)
    // );
    dispatch(updateQuestion(currentQuestion, optionSelected));
    setCurrentQuestion((prev) => prev + 1);
  };

  const sendQuiz = () => {
    dispatch(numOfCorrectAns()); // update correct answers globally
    setDisplayResult(true);
    // setCorrectAns(quizService.numOfCorrectAns(questions));
  };

  useEffect(() => {
    const initialQuiz = async () => {
      const quizQuestions = await axios.get(
        `http://localhost:3001/api/${subject}`
      );
      if (quizQuestions.data.length === 15) {
        dispatch(
          updateQuiz({
            questions: quizQuestions.data.slice(4),
            numOfCorrectAns: 0,
          })
        );
        setQuestions(quizQuestions.data || []);
      }
    };
    initialQuiz();
  }, [navigate, subject]);

  return questions ? (
    <div className="quiz">
      <h1>{questions[currentQuestion]?.query || ""}</h1>
      <h2>{questions[currentQuestion]?.code || ""}</h2>
      <CheckBox
        options={questions[currentQuestion]?.options || ""}
        sendAns={currentQuestion === 4 ? sendQuiz : sendAns}
        index={currentQuestion}
      />
      <div style={{ display: displayResult ? "block" : "none" }}>
        {displayResult ? <MyModal /> : ""}
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
