import React from 'react';
import SavingsPlanList from '../components/lists/SavingsPlanList';
import SavingsTrackerChart from '../components/charts/SavingsTrackerChart';

function SavingsPlan() {
    return (
        <div className="savings-plan-page">
            <h2>Savings Plan</h2>
            <SavingsPlanList />
            <SavingsTrackerChart />
        </div>
    );
}

export default SavingsPlan;
