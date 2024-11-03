import React, { useEffect, useState } from 'react'; 
import { getBudgetById } from '../../services/budgetApi';

function BudgetList() {
    const [budgets, setBudgets] = useState([]);
    const [filteredBudgets, setFilteredBudgets] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                const data = await getBudgetById();
                setBudgets(data);
                setFilteredBudgets(data); 
            } catch (error) {
                console.error('Error fetching budgets:', error);
            }
        };
        fetchBudgets();
    }, []);

    useEffect(() => {
        // Filter budgets by the selected category
        if (filterCategory) {
            setFilteredBudgets(
                budgets.filter(budget => budget.budgetCategories.includes(filterCategory))
            );
        } else {
            setFilteredBudgets(budgets); 
        }
    }, [filterCategory, budgets]);

    return (
        <div>
            <h2>Budget List</h2>
            
            <label htmlFor="categoryFilter">Filter by Category:</label>
            <select
                id="categoryFilter"
                onChange={(e) => setFilterCategory(e.target.value)}
                value={filterCategory}
            >
                <option value="">All Categories</option>
                <option value="Housing">Housing</option>
                <option value="Food">Food</option>
                <option value="Utilities">Utilities</option>
                <option value="Insurance">Insurance</option>
                <option value="Subscriptions">Subscriptions</option>
            </select>

            <div>
                {filteredBudgets.map((budget) => (
                    <div key={budget._id} className="budget-item">
                        <p><strong>User ID:</strong> {budget.userId}</p>
                        <p><strong>Monthly Income:</strong> ${budget.monthlyIncome}</p>
                        <p><strong>Monthly Expenses:</strong> ${budget.monthlyExpenses}</p>
                        <p><strong>Categories:</strong> {budget.budgetCategories.join(', ')}</p>
                        <p><strong>Created At:</strong> {new Date(budget.createdAt).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BudgetList;


