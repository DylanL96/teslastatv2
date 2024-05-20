import React, { useState, useEffect } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const CashflowPage = () => {
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
          label: "Operating Cash Flow",
          data: [1391,
            1235,
            -640,
            864,
            756,
            1425,
            -440,
            964,
            2400,
            3019,
            1641,
            2124,
            3147,
            4585,
            3995,
            2351],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235)",
        },
        {
          label: "Capital Expenditures",
          data: [-561,
            -365,
            -280,
            -250,
            -385,
            -412,
            -455,
            -546,
            -1005,
            -1151,
            -1348,
            -1505,
            -1819,
            -1810,
            -1767,
            -1730],
          borderColor: "rgb(0, 102, 102)",
          backgroundColor: "rgba(0, 102, 102)",
        },
        {
          label: "Free Cash Flow",
          data: [830,
            870,
            -920,
            614,
            371,
            1013,
            -895,
            418,
            1395,
            1868,
            293,
            619,
            1328,
            2775,
            2228,
            621],
          borderColor: "rgb(51, 255, 255)",
          backgroundColor: "rgba(51, 255, 255)",
        }
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
          text: "Tesla Quarterly Cash Flow",
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

export default CashflowPage
