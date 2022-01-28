import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import CheckBox from "../components/Checkbox/CheckBox";

const Quiz = function () {
  const navigate = useNavigate();
  const { subject } = useParams();
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const initialQuiz = async () => {
      const quizQuestions = await axios.get(
        `http://localhost:3001/api/${subject}`
      );
      if (quizQuestions.data.length === 15)
        setQuestions(quizQuestions.data || []);
    };
    initialQuiz();
  }, [navigate, subject]);

  return questions ? (
    <div>
      <h1>{questions[0]?.query || ""}</h1>
      <h2>{questions[0]?.code || ""}</h2>
      <CheckBox options={questions[0]?.options || ""} />
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
