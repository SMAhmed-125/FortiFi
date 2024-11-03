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

export const getMilestoneById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/milestones/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting milestone with id ${id}:`, error);
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


export const createMilestone = async (milestoneData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/milestones`, milestoneData);
        return response.data;
    } catch (error) {
        console.error(`Error creating milestone:`, error);
        throw error;
    }
};

export const updateMilestoneById = async (id, milestoneData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/milestones/${id}`, milestoneData);
        return response.data;
    } catch (error) {
        console.error(`Error updating milestone with id ${id}:`, error);
        throw error;
    }
};

export const updateMilestoneToComplete = async (id) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/milestones/${id}/completed`);
        return response.data;
    } catch (error) {
        console.error(`Error updating milestone to complete with id ${id}:`, error);
        throw error;
    }
};

export const deleteMilestoneById = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/milestones/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting milestone with id ${id}:`, error);
        throw error;
    }
};
