import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data?.bpi),
    datasets: [
      {
        label: `Last 60 days Trend of bitcoin prices`,
        data: Object.values(data?.bpi),
        borderColor: ["rgba(13, 226, 48, 1)"],
        backgroundColor: ["rgba(146, 241, 161, 1"],
        borderWidth: 5,
        mainAspectRatio: false,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            stepSize: 10000,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            callback: function (tick, index, array) {
              return index % 10 ? "" : tick;
            },
          },
        },
      ],
    },
  };

  return (
    <div className="chart">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
