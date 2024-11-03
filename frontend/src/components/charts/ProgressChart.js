// src/components/charts/SavingsProgressChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ProgressChart = ({ data }) => {
    const chartData = {
        labels: ['Achieved', 'Remaining'],
        datasets: [
            {
                label: 'Savings Progress',
                data: [data.achieved, data.remaining], 
                backgroundColor: ['#36A2EB', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384'],
            },
        ],
    };

    return (
        <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
            <h3>Savings Progress</h3>
            <Doughnut data={chartData} />
        </div>
    );
};

export default ProgressChart;
