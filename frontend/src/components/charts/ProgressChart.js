import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ProgressChart = ({ data }) => {
    const chartData = {
        labels: ['Achieved', 'Remaining'],
        datasets: [
            {
                label: 'Savings Progress',
                data: [data.achieved, data.remaining],
                backgroundColor: ['#7c4aa8', '#9a1330'],
                hoverBackgroundColor: ['#240646', '#b52343'],
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
            <h3 style={titleStyle}>Savings Progress</h3>
            <Doughnut data={chartData} />
        </div>
    );
};

export default ProgressChart;

