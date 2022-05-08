import React, { useEffect, useState } from "react";
import { Bar as BarJS, Line } from "react-chartjs-2";
import axios from "axios";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const dataForLineChart = (data: number[], months: string[]) => ({
  labels: months,
  datasets: [
    {
      label: "My First Dataset",
      data,
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
});

// const data = {
//   labels: ["Red", "Blue", "Yellow"],
//   datasets: [
//     {
//       label: "My First Dataset",
//       data: [300, 50, 100],
//       backgroundColor: [
//         "rgb(255, 99, 132)",
//         "rgb(54, 162, 235)",
//         "rgb(255, 205, 86)",
//       ],
//       hoverOffset: 4,
//     },
//   ],
// };

const BarC = function () {
  const [fakeDates, setFakeDates] = useState<FakeDateStats[]>([]);
  useEffect(() => {
    const getFakeStats = async () => {
      const { data: fakeUsersData }: { data: FakeDateStats[] } =
        await axios.get(`http://localhost:3001/fake/stats/users`);
      console.log(fakeUsersData);

      setFakeDates(fakeUsersData);
    };
    getFakeStats();
  }, []);
  return (
    <div>
      {fakeDates ? (
        <Line
          data={dataForLineChart(
            fakeDates.map((month) => Object.values(month)[0]),
            fakeDates.map((month) => Object.keys(month)[0])
          )}
          height={400}
          width={600}
        />
      ) : (
        ""
      )}
      {/* <BarJS data={data} height={400} width={600} /> */}
    </div>
  );
};

export default BarC;
