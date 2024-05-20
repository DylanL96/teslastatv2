import React, { useState, useEffect } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const RevOpIncome = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
      labels: ["Q3 2018", "Q4 2018", 
      "Q1 2019", "Q2 2019", "Q3 2019", "Q4 2019", 
      "Q1 2020", "Q2 2020", "Q3 2020", "Q4 2020", 
      "Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021", 
      "Q1 2022", "Q2 2022"
    ],
      datasets: [
        {
          label: "Revenue",
          data: [6824,
            7226,
            4541,
            6350,
            6303,
            7384,
            5985,
            6036,
            8771,
            10744,
            10389,
            11958,
            13757,
            17719,
            18756,
            16934],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235)",
        },
        {
          label: "Gross Profit",
          data: [1524,
            1443,
            566,
            921,
            1191,
            1391,
            1234,
            1267,
            2063,
            2066,
            2215,
            2884,
            3660,
            4847,
            5460,
            4234],
          borderColor: "rgb(0, 102, 102)",
          backgroundColor: "rgb(0, 102, 102)",
        },
        {
          label: "Operating Income",
          data: [417,
            414,
            -522,
            -167,
            261,
            359,
            283,
            327,
            809,
            575,
            594,
            1312,
            2004,
            2613,
            3603,
            2464],
          borderColor: "rgb(51, 255, 255)",
          backgroundColor: "rgb(51, 255, 255)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Tesla Quarterly Revenue & Operating Income",
        }
      },
    });
  }, []);
  return (
    <div className="financial-chart">
        <Bar options={chartOptions} data={chartData} />
    </div>
  )
}

export default RevOpIncome
