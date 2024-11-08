import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Filler,
    Legend,
    Tooltip,
    Title,
} from 'chart.js';

ChartJS.register(
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Filler,
    Legend,
    Tooltip,
    Title,
);

const TransactionHistoryChart = ({ data }) => {
    const chartData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Transaction Amounts',
                data: data.values,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
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
            <h3 style={titleStyle}>Transaction History</h3>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default TransactionHistoryChart;
