import React, { useState, useEffect } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, TooltipCallbacks} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const OperatingExpensePage = () => {
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
          label: "R&D",
          data: [351,
            356,
            340,
            324,
            334,
            345,
            324,
            279,
            366,
            522,
            666,
            576,
            611,
            740,
            865,
            667],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235)",
        },
        {
          label: "SG&A",
          data: [730,
            667,
            704,
            647,
            596,
            699,
            627,
            661,
            888,
            969,
            1056,
            973,
            994,
            1494,
            992,
            961],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
        {
          label: "Other OpEx",
          data: [26,
            6,
            43,
            117,
            0,
            -12,
            0,
            0,
            0,
            0,
            -101,
            23,
            51,
            0,
            0,
            142],
          borderColor: "rgb(51, 255, 255)",
          backgroundColor: "rgb(51, 255, 255)",
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
        tooltip: {
          callbacks: {
            footer: function(items) {
              return 'Total: ' + items.reduce((a, b) => a + b.parsed.y, 0).toLocaleString()
            }
          }
      },
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Tesla Quarterly Operating Expenses",
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

export default OperatingExpensePage