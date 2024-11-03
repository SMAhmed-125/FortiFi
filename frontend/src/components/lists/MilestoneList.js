import React, { useEffect, useState } from 'react';
import { getMilestoneById } from '../../services/milestoneApi';

function MilestoneList() {
    const [milestones, setMilestones] = useState([]);

    useEffect(() => {
        const fetchMilestones = async () => {
            try {
                const data = await getMilestoneById();
                setMilestones(data);
            } catch (error) {
                console.error("Error fetching milestones:", error);
            }
        };
        fetchMilestones();
    }, []);

    return (
        <div>
            <h2>Milestone List</h2>
            {milestones.length > 0 ? (
                milestones.map(milestone => (
                    <div key={milestone._id} className="milestone-item">
                        <p><strong>Goal ID:</strong> {milestone.goalId}</p>
                        <p><strong>Name:</strong> {milestone.name}</p>
                        <p><strong>Description:</strong> {milestone.description}</p>
                        <p><strong>Target Amount:</strong> ${milestone.targetAmount}</p>
                        <p><strong>Deadline:</strong> {new Date(milestone.deadline).toLocaleDateString()}</p>
                    </div>
                ))
            ) : (
                <p>No milestones found</p>
            )}
        </div>
    );
}

export default MilestoneList;
