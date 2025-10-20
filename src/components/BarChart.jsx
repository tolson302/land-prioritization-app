/* BarChart.jsx */

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register components needed for bar chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ labels, values }) => {
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
        borderColor: '#333',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        title: {
          display: true,
          text: 'Score',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Categories',
        },
      },
    },
    plugins: {
      legend: {
        display: false, // You can show this if needed
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
