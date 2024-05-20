import React, { useState, useEffect } from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

const MarginsPage = () => {
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
          label: "Gross Margin",
          data: [
            22.33,
            19.96,
            12.46,
            14.5,
            18.89,
            18.83,
            20.61,
            20.99,
            23.52,
            19.22,
            21.32,
            24.11,
            26.6,
            27.35,
            29.11,
            25],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgb(53, 162, 235)",
        },
        {
          label: "Operating Margin",
          data: [
            6.11,
            5.72,
            -11.5,
            -2.63,
            4.14,
            4.86,
            4.72,
            5.41,
            9.22,
            5.35,
            5.71,
            10.97,
            14.56,
            14.74,
            19.2,
            14.55],
          borderColor: "rgb(0, 102, 102)",
          backgroundColor: "rgb(0, 102, 102)",
        },
        {
          label: "Profit Margin",
          data: [
            4.57,
            1.93,
            -15.46,
            -6.43,
            2.26,
            1.42,
            0.26,
            1.72,
            3.77,
            2.51,
            4.21,
            9.55,
            11.76,
            13.09,
            17.69,
            13.34],
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
          text: "Tesla Quarterly Margins",
        }
      },
    });
  }, []);

  return (
    <React.Fragment>
      <div className="financial-chart">
          <Line options={chartOptions} data={chartData}></Line>
      </div>
      <section>
        <h1>Gross Margin</h1>
        <p>Gross margin is net sales less the cost of goods sold (COGS). In other words, it's the amount of money a company retains after incurring the direct costs associated with producing the goods it sells and the services it provides. The higher the gross margin, the more capital a company retains, which it can then use to pay other costs or satisfy debt obligations. The net sales figure is gross revenue, less the returns, allowances, and discounts.</p>
        <h1>Gross Margin Calculation</h1>
        <p>Net Sales=Equivalent to revenue, or the total amount of money generated from sales for the period. It can also be called net sales because it can include discounts and deductions from returned merchandise. Revenue is typically called the top line because it sits on top of the income statement. Costs are subtracted from revenue to calculate net income or the bottom line.COGS=Cost of goods sold. The direct costs associated with producing goods. Includes both direct labor costs, and any costs of materials used in producing or manufacturing a company’s products. </p>
        <h1>What Does the Gross Margin Tell You?</h1>
        <p>The gross margin (also referred to as gross profit) represents each dollar of revenue that the company retains after subtracting COGS.

        However, gross margin may also be referred to as gross profit margin. For example, if a company's recent quarterly gross profit margin is 35%, that means it retains $0.35 from each dollar of revenue generated.
        Because COGS have already been taken into account, those remaining funds may consequently be channeled toward paying debts, general and administrative expenses, interest fees, and dividend distributions to shareholders.
        Companies use gross margin, gross profit, and gross profit margin to measure how their production costs relate to their revenues. For example, if a company's gross margin is falling, it may strive to slash labor costs or source cheaper suppliers of materials.
        Alternatively, it may decide to increase prices, as a revenue-increasing measure. Gross profit margins can also be used to measure company efficiency or to compare two companies of different market capitalizations.
        Anyone struggling to calculate gross margin, may find it easier to utilize some of the best accounting software currently available instead.</p>
      </section>
    </React.Fragment>
  )
}

export default MarginsPage
