import React from 'react';
import { Bar } from 'react-chartjs-2';

const BudgetChart = ({ data }) => {
    const chartData = {
        labels: data.labels, 
        datasets: [
            {
                label: 'Budget Utilization (%)',
                data: data.values,
                backgroundColor: '#FF6B6B', // Vibrant color for the data bars
                borderColor: '#FFD93D', // Vibrant contrasting border color
                borderWidth: 2,
            }
        ]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    color: '#FFFFFF' // White text for y-axis
                },
                grid: {
                    color: '#22223B' // Subtle grid lines for contrast
                }
            },
            x: {
                ticks: {
                    color: '#FFFFFF' // White text for x-axis
                },
                grid: {
                    color: '#22223B' // Subtle grid lines for contrast
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: '#FFFFFF' // White text for legend
                }
            }
        }
    };

    const containerStyle = {
        backgroundColor: '#2D3142', // Dark purple/blue background
        color: '#FFFFFF', // White text
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
            <h3 style={titleStyle}>Budget Utilization</h3>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default BudgetChart;
