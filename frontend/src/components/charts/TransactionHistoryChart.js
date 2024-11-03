import React from 'react';
import { Bar } from 'react-chartjs-2';

const TransactionHistoryChart = ({ data }) => {
    const chartData = {
        labels: data.labels, 
        datasets: [
            {
                label: 'Transaction Amounts',
                data: data.values,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    return (
        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <h3>Transaction History</h3>
            <Bar data={chartData} options={{ scales: { y: { beginAtZero: true } } }} />
        </div>
    );
};

export default TransactionHistoryChart;
