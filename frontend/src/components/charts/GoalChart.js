import React from 'react';
import { Line } from 'react-chartjs-2';

const GoalChart = ({ data }) => {
    const chartData = {
        labels: data.labels, 
        datasets: [
            {
                label: 'Goal Completion (%)',
                data: data.values, 
                fill: false,
                borderColor: '#FF6384',
                tension: 0.1
            }
        ]
    };

    return (
        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <h3>Goal Completion Over Time</h3>
            <Line data={chartData} options={{ scales: { y: { beginAtZero: true, max: 100 } } }} />
        </div>
    );
};

export default GoalChart;
