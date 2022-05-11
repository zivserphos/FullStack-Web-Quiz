export const dataForLineChart = (data: number[], months: string[]) => ({
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

export const dataForBarChart = (
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

export const dataForPie = (data: number[]) => ({
  labels: [`Perfect Quiz`, "Not A Perfect Quiz"],
  datasets: [
    {
      label: "The ratio of perfect quizzes to those not",
      data,
      backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
      hoverOffset: 4,
    },
  ],
});
