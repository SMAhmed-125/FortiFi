import React, { useEffect, useState } from 'react'; 
import { getBudgetById } from '../../services/budgetApi';
import Budget from '../../pages/Budget';
import BudgetChart from '../components/charts/BudgetChart';

function BudgetList() {
    const [budgets, setBudgets] = useState([]);
    const [filteredBudgets, setFilteredBudgets] = useState([]);
    const [filterCategory, setFilterCategory] = useState('');
    const userId = '67278ae93ac9109a110d8190';

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                const data = await getBudgetById(userId);
                setBudgets(data);
                setFilteredBudgets(data); 
            } catch (error) {
                console.error('Error fetching budgets:', error);
            }
        };
        fetchBudgets();
    }, []);

    useEffect(() => {
        if (filterCategory) {
            setFilteredBudgets(
                budgets.filter(budget => budget.budgetCategories.includes(filterCategory))
            );
        } else {
            setFilteredBudgets(budgets); 
        }
    }, [filterCategory, budgets]);

    const chartData = {
        labels: filteredBudgets.map(budget => budget.budgetCategories.join(', ')),
        values: filteredBudgets.map(budget => (budget.monthlyExpenses / budget.monthlyIncome) * 100) 
    };

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

            <Budget budgets={filteredBudgets} />

            <BudgetChart data={chartData} />
        </div>
    );
}

export default BudgetList;



