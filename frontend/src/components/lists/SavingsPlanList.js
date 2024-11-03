import React, { useEffect, useState } from 'react';
import { getSavingsPlanById } from '../../services/savingsPlanApi';

function SavingsPlanList() {
    const [savingsPlans, setSavingsPlans] = useState([]);

    useEffect(() => {
        const fetchSavingsPlans = async () => {
            try {
                const data = await getSavingsPlanById();
                setSavingsPlans(data);
            } catch (error) {
                console.error("Error fetching savings plans:", error);
            }
        };
        fetchSavingsPlans();
    }, []);

    return (
        <div>
            <h2>Savings Plan List</h2>
            {savingsPlans.length > 0 ? (
                savingsPlans.map(plan => (
                    <div key={plan._id} className="savings-plan-item">
                        <p><strong>Goal ID:</strong> {plan.goalId}</p>
                        <p><strong>Frequency:</strong> {plan.frequency}</p>
                        <p><strong>Amount:</strong> ${plan.amount}</p>
                        <p><strong>Start Date:</strong> {new Date(plan.startDate).toLocaleDateString()}</p>
                        <p><strong>Next Contribution Date:</strong> {new Date(plan.nextContributionDate).toLocaleDateString()}</p>
                    </div>
                ))
            ) : (
                <p>No savings plans found</p>
            )}
        </div>
    );
}

export default SavingsPlanList;

