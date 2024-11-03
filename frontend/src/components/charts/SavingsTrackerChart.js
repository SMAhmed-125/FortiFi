// src/components/charts/SavingsTrackerChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const SavingsTrackerChart = ({ data }) => {
    const chartData = {
        labels: data.labels, // e.g., ['January', 'February', 'March']
        datasets: [
            {
                label: 'Savings Growth',
                data: data.values, // e.g., [200, 500, 1000]
                fill: true,
                borderColor: '#4BC0C0',
                backgroundColor: 'rgba(75,192,192,0.2)',
                tension: 0.4,
            },
        ],
    };

    return (
        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <h3>Savings Tracker</h3>
            <Line data={chartData} options={{ scales: { y: { beginAtZero: true } } }} />
        </div>
    );
};

export default SavingsTrackerChart;
