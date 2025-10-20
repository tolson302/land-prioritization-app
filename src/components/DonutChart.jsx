/* DonutChart.jsx */

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ labels, values }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Score',
        data: values,
        backgroundColor: [
          '#5e8fd0',
          '#77b484',
          '#df6b35',
          '#dbcf4e',
          '#41546d',
          '#8257c2',
          '#d6558b',
          '#7a5c58',
          '#9dfff9',
          '#64f58d'
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
