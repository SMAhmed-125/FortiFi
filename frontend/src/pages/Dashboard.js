import React, { useState, useEffect } from 'react';
import SpendingChart from '../components/charts/SpendingChart';
import BudgetChart from '../components/charts/BudgetChart';
import GoalChart from '../components/charts/GoalChart';
import { getTransactionById } from '../services/transactionApi';
import { getBudgetById } from '../services/budgetApi';
import { getGoalById } from '../services/goalApi';

const Dashboard = () => {
    const [spendingData, setSpendingData] = useState(null);
    const [budgetData, setBudgetData] = useState(null);
    const [goalData, setGoalData] = useState(null);
    const userId = '67278ae93ac9109a110d8190'; 
    useEffect(() => {
        async function fetchData() {
            const spending = await getTransactionById(userId);
            const budget = await getBudgetById(userId);
            const goals = await getGoalById(userId);

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


