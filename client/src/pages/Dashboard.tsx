import React from "react";
import BarC from "../components/Charts/BarChart";
import Doughnut from "../components/Charts/Doughnut";
import "./styles/dashboard.scss";

const Dashboard = function () {
  return (
    <div className="dashboard">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "90vh",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <BarC />
      </div>
      <h1>Statistics About Quizzes Been Taken</h1>
      <div className="doughnut-wrapper">
        <Doughnut />
      </div>
      {/* <div className="display-data"> {
        numOfUsers && 
      }
        <u>Total Amount Of Users:</u> {numOfUsers} <br />
        <u>Total Amount Of Quizzes Been Taken:</u>
        {quizzes.filter((quiz) => quiz.result !== 15)} <br />
        <u>Perfect Quizzes:</u> {quizzes.filter((quiz) => quiz.result === 15)}
        <br />
        <u>Subject With Most Perfect Quizzes:</u> {bestSubject()} AWS(5) <br />
        <u>Most Users Registed In:</u>
        {bestMonth()} (73)
      </div> */}
    </div>
  );
};

export default Dashboard;
