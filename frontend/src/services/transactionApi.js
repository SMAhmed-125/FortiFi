import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllTransactions = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transactions:`, error);
        throw error;
    }
};

export const getTransactionById = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transaction with id ${userId}:`, error);
        throw error;
    }
};

export const getTransactionByUserIdAndGoalId = async (userId, goalId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions/${userId}/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transaction with user id ${userId} and goal id ${goalId}:`, error);
        throw error;
    }
};

export const getTransactionSummaryByUserId = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions/${userId}/summary`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transaction summary:`, error);
        throw error;
    }
};

export const getTransactionSummaryByUserIdAndGoalId = async (userId, goalId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions/${userId}/${goalId}/summary`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transaction summary:`, error);
        throw error;
    }
};

export const createTransaction = async (transactionData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/transactions`, transactionData);
        return response.data;
    } catch (error) {
        console.error(`Error creating transaction:`, error);
        throw error;
    }
};

export const deleteTransactionByUserIdAndGoalId = async (userId, goalId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/transactions/${userId}/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting transaction with user id ${userId} and goal id ${goalId}:`, error);
        throw error;
    }
};


