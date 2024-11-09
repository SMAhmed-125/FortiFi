import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); 
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; 
        }
        return config;
    },
    (error) => Promise.reject(error)
);


export const getMilestoneById = async (goalId) => {
    try {
        const response = await api.get(`/milestones/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error getting milestone with goalId ${goalId}:`, error);
        throw error;
    }
};

export const getMilestoneByOrder = async (userId, goalId) => {
    try {
        const response = await api.get(`/milestones${userId}/${goalId}/ordered`);
        return response.data;
    } catch (error) {
        console.error(`Error getting sorted milestones:`, error);
        throw error;
    }
};


export const createMilestone = async (userId, goalId, milestoneData) => {
    try {
        const response = await api.post(`/milestones/${userId}/${goalId}`, milestoneData);
        return response.data;
    } catch (error) {
        console.error(`Error creating milestone:`, error);
        throw error;
    }
};

export const updateMilestoneById = async (userId, goalId, milestoneData) => {
    try {
        const response = await api.patch(`/milestones/${userId}/${goalId}`, milestoneData);
        return response.data;
    } catch (error) {
        console.error(`Error updating milestone with goalId ${goalId}:`, error);
        throw error;
    }
};

export const deleteMilestoneById = async (userId, goalId) => {
    try {
        const response = await api.delete(`/milestones/${userId}/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting milestone with goalId ${goalId}:`, error);
        throw error;
    }
};
