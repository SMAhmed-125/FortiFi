import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});


export const getTransactionById = async (userId) => {
    try {
        const response = await api.get(`/transactions/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transaction with id ${userId}:`, error);
        throw error;
    }
};

export const getTransactionByUserIdAndGoalId = async (userId, goalId) => {
    try {
        const response = await api.get(`/transactions/${userId}/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transaction with user id ${userId} and goal id ${goalId}:`, error);
        throw error;
    }
};

export const getTransactionSummaryByUserId = async (userId) => {
    try {
        const response = await api.get(`/transactions/${userId}/summary`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transaction summary:`, error);
        throw error;
    }
};

export const getTransactionSummaryByUserIdAndGoalId = async (userId, goalId) => {
    try {
        const response = await api.get(`/transactions/${userId}/${goalId}/summary`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transaction summary:`, error);
        throw error;
    }
};

export const createTransaction = async (userId, goalId, transactionData) => {
    try {
        const response = await api.post(`/transactions/${userId}/${goalId}`, transactionData);
        return response.data;
    } catch (error) {
        console.error(`Error creating transaction:`, error);
        throw error;
    }
};



