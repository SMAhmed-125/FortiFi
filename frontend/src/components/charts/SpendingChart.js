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

    const containerStyle = {
        backgroundColor: '#2D3142',
        color: '#FFFFFF',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        textAlign: 'center'
    };

    const titleStyle = {
        fontSize: '1.5em',
        marginBottom: '20px',
        color: '#FFFFFF'
    };

    return (
        <div style={containerStyle}>
            <h3 style={titleStyle}>Spending Breakdown</h3>
            <Pie data={chartData} />
        </div>
    );
};

export default SpendingChart;

