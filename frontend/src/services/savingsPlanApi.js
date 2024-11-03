import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllSavingsPlans = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/savings`);
        return response.data;
    } catch (error) {
        console.error(`Error getting savings plans:`, error);
        throw error;
    }
};

export const getSavingsPlanById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/savings/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting savings plan with id ${id}:`, error);
        throw error;
    }
};

export const getSavingsPlanProgressById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/savings/${id}/progress`);
        return response.data;
    } catch (error) {
        console.error(`Error getting savings plan progress with id ${id}:`, error);
        throw error;
    }
};

export const createSavingsPlan = async (planData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/savings`, planData);
        return response.data;
    } catch (error) {
        console.error(`Error creating savings plan:`, error);
        throw error;
    }
};

export const updateSavingsPlanById = async (id, planData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/savings/${id}`, planData);
        return response.data;
    } catch (error) {
        console.error(`Error updating savings plan with id ${id}:`, error);
        throw error;
    }
};

export const deleteSavingsPlanById = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/savings/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting savings plan with id ${id}:`, error);
        throw error;
    }
};


