/* eslint-disable react-hooks/rules-of-hooks */
// import axios from "axios";
import React from "react";
import { Doughnut as DoughnutComponent } from "react-chartjs-2";
import "./styles/doughnut.scss";

const Doughnut = function () {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="doughnut-wrapper">
      <DoughnutComponent
        data={data}
        options={{ responsive: true, maintainAspectRatio: true }}
      />
    </div>
  );
};

export default Doughnut;
