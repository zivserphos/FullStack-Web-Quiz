import React from "react";
import BarC from "../components/BarChart/BarChart";

const Dashboard = function () {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "90vh",
        alignItems: "center",
      }}
    >
      <BarC />
    </div>
  );
};

export default Dashboard;
