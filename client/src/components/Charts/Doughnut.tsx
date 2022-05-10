/* eslint-disable react-hooks/rules-of-hooks */
// import axios from "axios";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Doughnut as DoughnutComponent, Pie } from "react-chartjs-2";
import colors from "../../utils/colors";
import "./styles/doughnut.scss";

const dataForPie = (data: number[]) => ({
  labels: ["Perfect Quiz", "Not A Perfect Quiz"],
  datasets: [
    {
      label: "The ratio of perfect quizzes to those not",
      data,
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,
    },
    // {
    //   label: "perfect quizzes by subject",
    //   data,
    //   backgroundColor: ["rgb(255, 205, 86)", "green"],
    //   hoverOffset: 4,
    // },
  ],
});

const dataForDoughnut = (data: { [key: string]: number }) => ({
  labels: Object.keys(data),
  datasets: [
    {
      label: "perfect quizzes by subject",
      data: Object.values(data),
      backgroundColor: colors,
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

  const perfectQuizzesPerSubject = () => {
    const subjects = fakeQuizzes
      .filter((quiz) => quiz.result === 15)
      .reduce(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (accu: any, quiz: FakeQuiz) =>
          accu[quiz.subject]
            ? { ...accu, [quiz.subject]: accu[quiz.subject] + 1 }
            : { ...accu, [quiz.subject]: 1 },
        {}
      );
    return subjects;
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

  return (
    <div style={{ width: "40%", height: "30%" }} className="doughnuts">
      {fakeQuizzes ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pie
            data={dataForPie(ratioOfQuizzes())}
            options={{ responsive: true, maintainAspectRatio: true }}
          />
          <div>
            <h1 style={{ textAlign: "right" }}>
              Perfect Quizzes Divided Into Subjects
            </h1>
            <DoughnutComponent
              data={dataForDoughnut(perfectQuizzesPerSubject())}
              options={{ responsive: true, maintainAspectRatio: true }}
            />
          </div>
        </div>
      ) : (
        "Currently Could Not Fetch Quizzes Data"
      )}
    </div>
  );
};

export default Doughnut;
