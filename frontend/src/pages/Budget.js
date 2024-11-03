import React, { useState, useEffect } from 'react';
import BudgetChart from '../components/charts/BudgetChart';
import { getBudgetById } from '../services/budgetApi';

const Budget = () => {
    const [budgetData, setBudgetData] = useState(null);

    useEffect(() => {
        async function fetchBudget() {
            try {
                const userId = '67278ae93ac9109a110d8190'; 
                const response = await getBudgetById(userId);
                setBudgetData(response.data);
            } catch (error) {
                console.error("Error fetching budget data:", error);
            }
        }

        fetchBudget();
    }, []);

    if (!budgetData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Budget</h2>
            <BudgetChart data={budgetData} />
        </div>
    );
};

export default Budget;

