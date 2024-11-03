import React from 'react';
import GoalList from '../components/lists/GoalList';
import GoalChart from '../components/charts/GoalChart';

function Goals() {
    return (
        <div className="goals-page">
            <h2>Goals</h2>
            <GoalList />
            <GoalChart />
        </div>
    );
}

export default Goals;
