import React from 'react';
import BudgetList from '../components/lists/BudgetList';
import BudgetChart from '../components/charts/BudgetChart';

function Budget() {
    return (
        <div className="budget-page">
            <h2>Budget</h2>
            <BudgetList />
            <BudgetChart />
        </div>
    );
}

export default Budget;
