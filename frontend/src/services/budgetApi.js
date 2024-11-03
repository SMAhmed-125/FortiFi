import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllBudgets = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/budgets`);
        return response.data;
    } catch (error) {
        console.error(`Error getting budgets:`, error);
        throw error;
    }
};

export const getBudgetSummary = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/budgets/summary`);
        return response.data;
    } catch (error) {
        console.error(`Error getting budget summary:`, error);
        throw error;
    }
};

export const updateBudgetById = async (id, budgetData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/budgets/${id}`, budgetData);
        return response.data;
    } catch (error) {
        console.error(`Error updating budget with id ${id}:`, error);
        throw error;
    }
};

export const createBudget = async (budgetData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/budgets`, budgetData);
        return response.data;
    } catch (error) {
        console.error(`Error creating budget:`, error);
        throw error;
    }
};


export const deleteBudgetById = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/budgets/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting budget with id ${id}:`, error);
        throw error;
    }
};
