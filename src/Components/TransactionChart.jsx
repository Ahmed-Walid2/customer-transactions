// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const TransactionChart = ({ transactions }) => {
//   const data = transactions.reduce((acc, transaction) => {
//     const date = transaction.date;
//     if (!acc[date]) {
//       acc[date] = 0;
//     }
//     acc[date] += transaction.amount;
//     return acc;
//   }, {});

//   const chartData = {
//     labels: Object.keys(data),
//     datasets: [
//       {
//         label: 'Total Transaction Amount',
//         data: Object.values(data),
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: false,
//       },
//     ],
//   };

//   return <Line data={chartData} />;
// };

// export default TransactionChart;

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function TransactionChart({ transactions }) {
  const data = transactions.map(transaction => ({
    date: transaction.date,
    amount: transaction.amount
  }));

  return (
    <>
    <div className="container d-flex justify-content-center align-items-center">
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
    </div>
    </>
  );
}

