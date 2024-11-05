import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllMilestones = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/milestones`);
        return response.data;
    } catch (error) {
        console.error(`Error getting milestones:`, error);
        throw error;
    }
};

export const getMilestoneById = async (goalId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/milestones/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting milestone with goalId ${goalId}:`, error);
        throw error;
    }
};

export const getMilestoneByOrder = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/milestones/ordered`);
        return response.data;
    } catch (error) {
        console.error(`Error getting sorted milestones:`, error);
        throw error;
    }
};


export const createMilestone = async (userId, milestoneData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/milestones/${goalId}`, milestoneData);
        return response.data;
    } catch (error) {
        console.error(`Error creating milestone:`, error);
        throw error;
    }
};

export const updateMilestoneById = async (goalId, milestoneData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/milestones/${goalId}`, milestoneData);
        return response.data;
    } catch (error) {
        console.error(`Error updating milestone with goalId ${goalId}:`, error);
        throw error;
    }
};

export const deleteMilestoneById = async (goalId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/milestones/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting milestone with goalId ${goalId}:`, error);
        throw error;
    }
};
