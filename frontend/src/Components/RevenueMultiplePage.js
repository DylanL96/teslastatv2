import React, { useState, useEffect } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const RevenueMultiplePage = () => {
  const [chartData, setChartData] = useState({datasets: []});
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
          label: "Revenue Multiple",
          data: [
            1.96,
            1.92,
            2.87,
            1.62,
            1.67,
            1.98,
            4.75,
            6.24,
            9.46,
            11.33,
            17.42,
            13.22,
            12.81,
            14.41,
            12.88,
            12.54],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235)",
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
          text: "Tesla Quarterly Revenue Multiple",
        }
      },
    });
  }, []);

  return (
    <React.Fragment>
      <div className="financial-chart">
          <Line options={chartOptions} data={chartData}></Line>
      </div>
    </React.Fragment>
  )
}

export default RevenueMultiplePage
