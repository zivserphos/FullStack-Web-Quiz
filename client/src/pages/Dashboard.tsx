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
    </div>
  );
};

export default Dashboard;
