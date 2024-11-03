import React from 'react';
import { Line } from 'react-chartjs-2';

const SavingsTrackerChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Savings Growth',
                data: data.values,
                fill: true,
                borderColor: '#4BC0C0',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderWidth: 2,
                tension: 0.4
            }
        ]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: { color: '#FFFFFF' },
                grid: { color: '#22223B' }
            },
            x: {
                ticks: { color: '#FFFFFF' },
                grid: { color: '#22223B' }
            }
        },
        plugins: {
            legend: {
                labels: { color: '#FFFFFF' }
            }
        }
    };

    const containerStyle = {
        backgroundColor: '#2D3142',
        color: '#FFFFFF',
        width: '100%',
        maxWidth: '500px',
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
            <h3 style={titleStyle}>Savings Tracker</h3>
            <Line data={chartData} options={chartOptions} />
        </div>
    );
};

export default SavingsTrackerChart;

