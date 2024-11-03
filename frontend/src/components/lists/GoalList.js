import React, { useEffect, useState } from 'react';
import { getGoalById } from '../../services/goalApi';

function GoalList() {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const data = await getGoalById();
                setGoals(data);
            } catch (error) {
                console.error("Error fetching goals:", error);
            }
        };
        fetchGoals();
    }, []);

    return (
        <div>
            <h2>Goal List</h2>
            {goals.length > 0 ? (
                goals.map(goal => (
                    <div key={goal._id} className="goal-item">
                        <p><strong>User ID:</strong> {goal.userId}</p>
                        <p><strong>Goal Name:</strong> {goal.name}</p>
                        <p><strong>Target Amount:</strong> ${goal.targetAmount}</p>
                        <p><strong>Current Amount:</strong> ${goal.currentAmount}</p>
                        <p><strong>Start Date:</strong> {new Date(goal.startDate).toLocaleDateString()}</p>
                        <p><strong>Target Date:</strong> {new Date(goal.targetDate).toLocaleDateString()}</p>
                        <p><strong>Priority Level:</strong> {goal.priorityLevel}</p>
                    </div>
                ))
            ) : (
                <p>No goals found</p>
            )}
        </div>
    );
}

export default GoalList;

