import React, { useState, useEffect } from 'react';
import SpendingChart from '../components/charts/SpendingChart';
import BudgetChart from '../components/charts/BudgetChart';
import GoalChart from '../components/charts/GoalChart';
import { getSpendingData, getBudgetSummary, getGoalProgress } from '../services/api';

const Dashboard = () => {
    const [spendingData, setSpendingData] = useState(null);
    const [budgetData, setBudgetData] = useState(null);
    const [goalData, setGoalData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const spending = await getSpendingData();
            const budget = await getBudgetSummary();
            const goals = await getGoalProgress();

            setSpendingData(spending);
            setBudgetData(budget);
            setGoalData(goals);
        }
        fetchData();
    }, []);

    if (!spendingData || !budgetData || !goalData) return <div>Loading...</div>;

    
    const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        heading: {
            color: '#3498db',
            fontSize: '2em',
            textAlign: 'center',
            marginBottom: '30px',
        },
        chartSection: {
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        chartContainer: {
            flex: '1 1 300px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Dashboard</h1>
            <div style={styles.chartSection}>
                <div style={styles.chartContainer}>
                    <SpendingChart data={spendingData} />
                </div>
                <div style={styles.chartContainer}>
                    <BudgetChart data={budgetData} />
                </div>
                <div style={styles.chartContainer}>
                    <GoalChart data={goalData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


