import React from 'react';

const Budget = ({ budgets }) => {
    return (
        <div className="budget-page">
            <h2>Budget Details</h2>
            {budgets.forEach((budget) => (
                    <div key={budget._id} className="budget-item">
                        <p><strong>Monthly Income:</strong> ${budget.monthlyIncome}</p>
                        <p><strong>Monthly Expenses:</strong> ${budget.monthlyExpenses}</p>
                        <p><strong>Categories:</strong> {budget.budgetCategories.join(', ')}</p>
                        <p><strong>Created At:</strong> {new Date(budget.createdAt).toLocaleDateString()}</p>
                    </div>
                ))}
        </div>
    );
};

export default Budget;



