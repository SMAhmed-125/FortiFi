import React, { useState, useEffect } from 'react';
import SpendingPieChart from '../components/charts/SpendingPieChart';
import BudgetProgressBarChart from '../components/charts/BudgetProgressBarChart';
import GoalCompletionChart from '../components/charts/GoalCompletionChart';
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

    return (
        <div>
            <h1>Dashboard</h1>
            <SpendingPieChart data={spendingData} />
            <BudgetProgressBarChart data={budgetData} />
            <GoalCompletionChart data={goalData} />
        </div>
    );
};

export default Dashboard;

