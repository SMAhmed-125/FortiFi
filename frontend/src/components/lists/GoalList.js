import React, { useEffect, useState } from 'react';
import { getGoalById } from '../../services/goalApi';
import Goal from '../../pages/Goals';
import GoalChart from '../charts/GoalChart';

function GoalList() {
    const [goals, setGoals] = useState([]);
    const userId = '67278ae93ac9109a110d8190';
    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const data = await getGoalById(userId);
                setGoals(data);
            } catch (error) {
                console.error("Error fetching goals:", error);
            }
        };
        fetchGoals();
    }, []);

    const chartData = {
        labels: goals.map((goal) => goal.name.join(', ')),
        values: goals.map((goal) => (goal.currentAmount / goal.targetAmount) * 100)
    };

    return (
        <div>
            <h2>Goal List</h2>
                {goals.map((goal) => (
                    <div key={goal._id} className="goal-item">
                        <p><strong>User ID:</strong> {goal.userId}</p>
                        <p><strong>Goal Name:</strong> {goal.name}</p>
                        <p><strong>Target Amount:</strong> ${goal.targetAmount}</p>
                        <p><strong>Current Amount:</strong> ${goal.currentAmount}</p>
                        <p><strong>Start Date:</strong> {new Date(goal.startDate).toLocaleDateString()}</p>
                        <p><strong>Target Date:</strong> {new Date(goal.targetDate).toLocaleDateString()}</p>
                        <p><strong>Priority Level:</strong> {goal.priorityLevel}</p>
                    </div>
                ))}

                <Goal goals={goals} />
                <GoalChart data={chartData}/>

        </div>
    );

}

export default GoalList;

