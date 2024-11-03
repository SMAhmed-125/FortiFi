import React from 'react';
import { Pie } from 'react-chartjs-2';

const SpendingChart = ({ data }) => {
    const chartData = {
        labels: data.labels, 
        datasets: [
            {
                label: 'Spending by Category',
                data: data.values, 
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF']
            }
        ]
    };

    return (
        <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
            <h3>Spending Breakdown</h3>
            <Pie data={chartData} />
        </div>
    );
};

export default SpendingChart;
