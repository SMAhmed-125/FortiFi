import axios from 'axios'

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllGoals = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/goals`);
        return response.data;
    } catch(error) {
        console.error('Error fetching goals:', error);
        throw error;
    }
};

export const getGoalById = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/goals/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching goal with id ${userId}:`, error);
        throw error;
    }
};

export const getProgressOfGoalById = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/goals/${userId}/progress`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching goal progress with id ${userId}:`, error);
        throw error;
    }
};

export const createGoal = async (goalData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/goals`, goalData);
        return response.data;
    } catch (error) {
        console.error(`Error creating goal:`, error);
        throw error;
    }
};

export const updateGoal = async (userId, goalData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/goals/${userId}`, goalData);
        return response.data;
    } catch (error) {
        console.error(`Error updating goal with ${userId}:`, error);
        throw error;
    }
}

export const deleteGoal = async (userId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/goals/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting goal with id ${userId}:`, error);
        throw error;
    }
};