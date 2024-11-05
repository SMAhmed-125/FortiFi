import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getSavingsPlanById = async (goalId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/savings/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting savings plan with goalId ${goalId}:`, error);
        throw error;
    }
};

export const getSavingsPlanProgressById = async (goalId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/savings/${goalId}/progress`);
        return response.data;
    } catch (error) {
        console.error(`Error getting savings plan progress with goalId ${goalId}:`, error);
        throw error;
    }
};

export const createSavingsPlan = async (goalId, planData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/savings/${goalId}`, planData);
        return response.data;
    } catch (error) {
        console.error(`Error creating savings plan:`, error);
        throw error;
    }
};

export const updateSavingsPlanById = async (goalId, planData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/savings/${goalId}`, planData);
        return response.data;
    } catch (error) {
        console.error(`Error updating savings plan with goalId ${goalId}:`, error);
        throw error;
    }
};

export const deleteSavingsPlanById = async (goalId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/savings/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting savings plan with goalId ${goalId}:`, error);
        throw error;
    }
};


