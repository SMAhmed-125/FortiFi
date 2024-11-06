import React from 'react';

const Goals = ({goals}) => {

    return (
        <div className="goals-page">
            <h2>Goals</h2>
            <h3>Goals Details</h3>
            {goals.map((goal) => (
                <div key={goal._id} className="goal-item">
                    <p><strong>Name: </strong>${goal.name} </p>
                    <p><strong>Target Amount: </strong> ${goal.targetAmount}</p>
                    <p><strong>Current Amount: </strong> ${goal.currentAmount}</p>
                    <p><strong>Start Date: </strong> ${goal.startDate}</p>
                    <p><strong>Target Date: </strong> ${goal.targetDate}</p>
                    <p><strong>Priority Level: </strong> ${goal.priorityLevel}</p>
                </div>
            ))}

        </div>
    );
};

export default Goals;

