import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CheckBox from "../components/Checkbox/CheckBox";

const Quiz = function () {
  const { subject } = useParams();
  const [questions, setQuestions] = useState<any[]>();
  useEffect(() => {
    const initialQuiz = async () => {
      const quizQuestions = await axios.get(
        `http://localhost:3001/api/${subject}`
      );
      setQuestions(quizQuestions.data || []);
    };
    initialQuiz();
  });

  return (
    <div>
      <CheckBox />
    </div>
  );
};

export default Quiz;
