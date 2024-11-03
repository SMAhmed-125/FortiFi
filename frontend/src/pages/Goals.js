import React, { useState, useEffect } from 'react';
import GoalList from '../components/lists/GoalList';
import GoalChart from '../components/charts/GoalChart';
import { getGoalById } from '../services/goalApi';

function Goals() {
    const [goalData, setGoalData] = useState(null);
    const userId = '67278ae93ac9109a110d8190'; 

    useEffect(() => {
        async function fetchGoals() {
            try {
                const userId = '67278ae93ac9109a110d8190'; 
                const response = await getGoalById(userId);
                setGoalData(response.data);
            } catch (error) {
                console.error("Error fetching goals data:", error);
            }
        }
        fetchGoals();
    }, []);

    if (!goalData) return <div>Loading...</div>;

    return (
        <div className="goals-page">
            <h2>Goals</h2>
            <GoalList />
            <GoalChart data={goalData} />
        </div>
    );
}

export default Goals;

