import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});


// Get all budgets by User Id
export const getBudgetById = async (userId) => {
    try {
        const response = await api.get(`/budgets/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting budgets:`, error);
        throw error;
    }
};

// Get budget summary for a specific user
export const getBudgetSummaryByUserId = async (userId) => {
    try {
        const response = await api.get(`/budgets/${userId}/summary`);
        return response.data;
    } catch (error) {
        console.error(`Error getting budget summary for user ${userId}:`, error);
        throw error;
    }
};

// Update a specific budget by ID
export const updateBudgetById = async (userId, budgetData) => {
    try {
        const response = await api.patch(`/budgets/${userId}`, budgetData);
        return response.data;
    } catch (error) {
        console.error(`Error updating budget with id ${userId}:`, error);
        throw error;
    }
};

// Create or replace a budget for a specific user 
export const createBudget = async (userId, budgetData) => {
    try {
        const response = await api.put(`/budgets/${userId}`, budgetData);
        return response.data;
    } catch (error) {
        console.error(`Error creating or updating budget for user ${userId}:`, error);
        throw error;
    }
};

// Delete a budget by user ID
export const deleteBudgetById = async (userId) => {
    try {
        const response = await api.delete(`/budgets/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting budget for user ${userId}:`, error);
        throw error;
    }
};
