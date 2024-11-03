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

export const getTransactionById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting transaction with id ${id}:`, error);
        throw error;
    }
};

export const getTransactionSummary = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/transactions/summary`);
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

export const deleteTransactionById = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/transactions/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting transaction with id ${id}:`, error);
        throw error;
    }
};


