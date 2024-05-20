import React, { useState, useEffect } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
)

const DeliveryPage = () => {
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
          label: "Model S/X",
          data: [27660, 
            27607, 
            12091, 
            17722,
            17483,
            19475,
            12230,
            10614,
            15275,
            18966,
            2030,
            1896,
            9289,
            11766,
            14724,
            16162],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235)",
        },
        {
          label: "Model 3/Y",
          data: [55840,
            63359,
            50928,
            77634,
            79703,
            92620,
            76266,
            80227,
            124318,
            161700,
            182847,
            199409,
            232102,
            296884,
            295324,
            238533],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.4)",
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
              return 'Total Deliveries: ' + items.reduce((a, b) => a + b.parsed.y, 0).toLocaleString()
            }
          }
      },
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Tesla Quarterly Deliveries By Segment",
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

export default DeliveryPage