import React, { useEffect, useState } from "react";
import { Bar as BarJS, Line } from "react-chartjs-2";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import "./styles/bar-chart.scss";
import config from "../../utils/config";

Chart.register(...registerables);

const dataForLineChart = (data: number[], months: string[]) => ({
  labels: months,
  datasets: [
    {
      label: `User Registration Per Month (total: )`,
      data,
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
});

const dataForBarChart = (
  data: number[],
  months: string[],
  allUsers: number
) => ({
  labels: months,
  datasets: [
    {
      label: "The number of users registered per month",
      data,
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      hoverOffset: 4,
    },
    {
      label:
        "Percentage of users registered per month in relation to all users",
      data: data.map((num) => (num * 100) / allUsers),
      backgroundColor: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],

      hoverOffset: 4,
    },
  ],
});

const BarC = function () {
  const [fakeDates, setFakeDates] = useState<FakeDateStats[]>([]);
  const [display, setDisplay] = useState(false);
  const [allUsers, setAllUsers] = useState<number>(0);
  useEffect(() => {
    const getFakeStats = async () => {
      const { data: fakeUsersData }: { data: FakeDateStats[] } =
        await axios.get(`${config.baseUrl}/fake/stats/users`);

      setFakeDates(fakeUsersData);
    };
    getFakeStats();
  }, []);

  useEffect(() => {
    setDisplay(true);
  }, []);
  useEffect(() => {
    const numUsers = fakeDates
      ? fakeDates.reduce(
          (acc, curr: FakeDateStats) => acc + Object.values(curr)[0],
          0
        )
      : 0;
    setAllUsers(Number(numUsers));
  }, [fakeDates]);
  return (
    <div className="bar-charts">
      <div>
        <h1>Users Registration Statistics</h1>
        {fakeDates ? (
          <div
            className="wrap-user-stats"
            style={{ display: display ? "flex" : "block" }}
          >
            <div>
              <Line
                data={dataForLineChart(
                  fakeDates.map((month) => Object.values(month)[0]),
                  fakeDates.map((month) => Object.keys(month)[0])
                )}
                height="25%"
                width="35%"
              />
            </div>
            <div>
              <BarJS
                data={dataForBarChart(
                  fakeDates.map((month) => Object.values(month)[0]),
                  fakeDates.map((month) => Object.keys(month)[0]),
                  allUsers
                )}
                height="25%"
                width="35%"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BarC;
