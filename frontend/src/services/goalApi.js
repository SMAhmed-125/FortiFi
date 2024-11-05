import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getGoalById = async (userId) => {
    try {
        const response = await api.get(`/goals/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching goal with id ${userId}:`, error);
        throw error;
    }
};

export const getProgressOfGoalById = async (userId) => {
    try {
        const response = await api.get(`/goals/${userId}/progress`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching goal progress with id ${userId}:`, error);
        throw error;
    }
};

export const createGoal = async (userId, goalData) => {
    try {
        const response = await api.post(`/goals/${userId}`, goalData);
        return response.data;
    } catch (error) {
        console.error(`Error creating goal:`, error);
        throw error;
    }
};

export const updateGoal = async (userId, goalData) => {
    try {
        const response = await api.patch(`/goals/${userId}`, goalData);
        return response.data;
    } catch (error) {
        console.error(`Error updating goal with ${userId}:`, error);
        throw error;
    }
}

export const deleteGoal = async (userId) => {
    try {
        const response = await api.delete(`/goals/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting goal with id ${userId}:`, error);
        throw error;
    }
};