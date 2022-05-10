/* eslint-disable react-hooks/rules-of-hooks */
// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut as DoughnutComponent } from "react-chartjs-2";
import "./styles/doughnut.scss";

const dataForDoughnut = (data: number[]) => ({
  labels: ["Perfect Quiz", "Not A Perfect Quiz"],
  datasets: [
    {
      label: "The ratio of perfect quizzes to those not",
      data,
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
});

const Doughnut = function () {
  const [fakeQuizzes, setFakeQuizzes] = useState<FakeQuiz[]>([]);

  const ratioOfQuizzes = () => {
    const perfectQuizzes = fakeQuizzes.reduce(
      (accu, quiz) => (quiz.result === 15 ? accu + 1 : accu),
      0
    );
    return [perfectQuizzes, fakeQuizzes.length - perfectQuizzes];
  };
  useEffect(() => {
    const fetchFakeQuizzes = async () => {
      const { data: fetchedQuizzes }: { data: FakeQuiz[] } = await axios.get(
        "http://localhost:3001/fake/stats/quizzes"
      );
      setFakeQuizzes(fetchedQuizzes);
    };
    fetchFakeQuizzes();
  }, []);

  useEffect(() => {
    console.log(fakeQuizzes);
  }, [fakeQuizzes]);

  return (
    <div style={{ width: "40%", height: "30%" }}>
      {fakeQuizzes ? (
        <DoughnutComponent
          data={dataForDoughnut(ratioOfQuizzes())}
          options={{ responsive: true, maintainAspectRatio: true }}
        />
      ) : (
        "Currently Could Not Fetch Quizzes Data"
      )}
    </div>
  );
};

export default Doughnut;
