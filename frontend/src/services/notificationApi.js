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



export const getNotificationsByUserId = async (userId) => {
    try {
      const response = await api.get(`/notifications/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching notification with userId ${userId}:`, error);
      throw error;
    }
};

export const getNotificationsByUserIdAndGoalId = async (userId, goalId) => {
    try {
      const response = await api.get(`/notifications/${userId}/${goalId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching notification with userId ${userId} and ${goalId}:`, error);
      throw error;
    }
};

export const createNotification = async (userId, goalId, notificationData) => {
    try {
        const response = await api.post(`/notifications/${userId}/${goalId}`, notificationData);
        return response.data;
    } catch (error) {
        console.error(`Error creating notification:`, error);
        throw error;
    }
};

export const updateNotificationById = async (userId, goalId, notificationData) => {
    try {
        const response = await api.patch(`/notifications/${userId}/${goalId}`, notificationData);
        return response.data;
    } catch (error) {
        console.error(`Error updating notification with userId ${userId}:`, error);
        throw error;
    }
};

export const deleteNotificationByUserIdAndGoalId = async (userId, goalId) => {
    try {
        const response = await api.delete(`/notifications/${userId}/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting notification with userId ${userId}:`, error);
        throw error;
    }
};

export const deleteMultipleNotificationsByUserId = async (userId, notificationData) => {
    try {
        const response = await api.delete(`/notifications/${userId}`, notificationData);
        return response.data;
    } catch (error) {
        console.error(`Error deleting notification`, error);
        throw error;
    }
};

