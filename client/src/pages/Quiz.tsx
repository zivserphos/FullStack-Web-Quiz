/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import MyModal from "../components/modal/Modal";
import "./styles/quiz.scss";
import CheckBox from "../components/Checkbox/CheckBox";
import quizService from "../utils/quiz";

const Quiz = function () {
  const navigate = useNavigate();
  const { subject } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [correctAns, setCorrectAns] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [displayResult, setDisplayResult] = useState<boolean>(false);

  const sendAns = (optionSelected: Option) => {
    setQuestions(
      quizService.updateIfCorrect(questions, currentQuestion, optionSelected)
    );
    setCurrentQuestion((prev) => prev + 1);
    if (currentQuestion === 14)
      setCorrectAns(quizService.numOfCorrectAns(questions));
  };

  const sendQuiz = () => {
    setDisplayResult(true);
    setCorrectAns(quizService.numOfCorrectAns(questions));
  };

  useEffect(() => {
    const initialQuiz = async () => {
      const quizQuestions = await axios.get(
        `http://localhost:3001/api/${subject}`
      );
      console.log(quizQuestions.data);
      if (quizQuestions.data.length === 15)
        setQuestions(quizQuestions.data || []);
    };
    initialQuiz();
  }, [navigate, subject]);

  return questions ? (
    <div className="quiz">
      <div style={{ display: displayResult ? "block" : "none" }}>
        <MyModal display={displayResult} />
      </div>
      <h1>{questions[currentQuestion]?.query || ""}</h1>
      <h2>{questions[currentQuestion]?.code || ""}</h2>
      <CheckBox
        options={questions[currentQuestion]?.options || ""}
        sendAns={currentQuestion === 14 ? sendQuiz : sendAns}
        index={currentQuestion}
      />
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
