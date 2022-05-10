import React from "react";
import BarC from "../components/Charts/BarChart";
import Doughnut from "../components/Charts/Doughnut";

const Dashboard = function () {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div>
        <BarC />
        <Doughnut />
      </div>
    </div>
  );
};

export default Dashboard;
