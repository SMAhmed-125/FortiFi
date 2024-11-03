import React from 'react';
import { Bar } from 'react-chartjs-2';

const BudgetChart = ({ data }) => {
    const chartData = {
        labels: data.labels, 
        datasets: [
            {
                label: 'Budget Utilization (%)',
                data: data.values,
                backgroundColor: '#36A2EB',
            }
        ]
    };

    return (
        <div style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
            <h3>Budget Utilization</h3>
            <Bar data={chartData} options={{ scales: { y: { beginAtZero: true, max: 100 } } }} />
        </div>
    );
};

export default BudgetChart;
