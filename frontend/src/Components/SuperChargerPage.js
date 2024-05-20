import React, { useState, useEffect } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const SuperChargerPage = () => {
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
          label: "Supercharger Stations",
          data: [1352,
            1421,
            1490,
            1587,
            1653,
            1821,
            1917,
            2035,
            2181,
            2564,
            2699,
            2966,
            3254,
            3476,
            3724,
            3971],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235)",
        }
      ],
    });
    setChartOptions({
      responsive: true,
      scales:{
        x:{
          stacked: true
        },
        y:{
          stacked: true
        }
      },
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Tesla Quarterly Superchargers Installed",
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

export default SuperChargerPage
