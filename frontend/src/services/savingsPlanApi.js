import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});


export const getSavingsPlanById = async (goalId) => {
    try {
        const response = await api.get(`/savings/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting savings plan with goalId ${goalId}:`, error);
        throw error;
    }
};

export const getSavingsPlanProgressById = async (goalId) => {
    try {
        const response = await api.get(`/savings/${goalId}/progress`);
        return response.data;
    } catch (error) {
        console.error(`Error getting savings plan progress with goalId ${goalId}:`, error);
        throw error;
    }
};

export const createSavingsPlan = async (goalId, planData) => {
    try {
        const response = await api.post(`/savings/${goalId}`, planData);
        return response.data;
    } catch (error) {
        console.error(`Error creating savings plan:`, error);
        throw error;
    }
};

export const updateSavingsPlanById = async (goalId, planData) => {
    try {
        const response = await api.patch(`/savings/${goalId}`, planData);
        return response.data;
    } catch (error) {
        console.error(`Error updating savings plan with goalId ${goalId}:`, error);
        throw error;
    }
};

export const deleteSavingsPlanById = async (goalId) => {
    try {
        const response = await api.delete(`/savings/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting savings plan with goalId ${goalId}:`, error);
        throw error;
    }
};


