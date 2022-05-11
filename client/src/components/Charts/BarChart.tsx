import React, { useEffect, useState } from "react";
import { Bar as BarJS, Line } from "react-chartjs-2";
import axios from "axios";
import { Chart, registerables } from "chart.js";
import "./styles/bar-chart.scss";
import config from "../../utils/config";
import { dataForBarChart, dataForLineChart } from "../../utils/charts";

Chart.register(...registerables);

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
