import React, { useState, useEffect } from 'react';
import SavingsPlanList from '../components/lists/SavingsPlanList';
import SavingsTrackerChart from '../components/charts/SavingsTrackerChart';
import { getSavingsPlanById } from '../services/savingsPlanApi';

function SavingsPlan() {
    const [savingsData, setSavingsData] = useState(null);
    const userId = '67278ae93ac9109a110d8190'; 

    useEffect(() => {
        async function fetchSavingsPlan() {
            try {
                const response = await getSavingsPlanById(userId);
                setSavingsData(response.data);
            } catch (error) {
                console.error("Error fetching savings plan data:", error);
            }
        }
        fetchSavingsPlan();
    }, []);

    if (!savingsData) return <div>Loading...</div>;

    return (
        <div className="savings-plan-page">
            <h2>Savings Plan</h2>
            <SavingsPlanList />
            <SavingsTrackerChart data={savingsData} />
        </div>
    );
}

export default SavingsPlan;

