import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getAllNotifications = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/notifications`);
        return response.data;
    } catch (error) {
        console.error(`Error getting notifications:`, error);
        throw error;
    }
};

export const getNotificationById = async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/notifications/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching notification with id ${id}:`, error);
      throw error;
    }
};

export const createNotification = async (notificationData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/notifications`, notificationData);
        return response.data;
    } catch (error) {
        console.error(`Error creating notification:`, error);
        throw error;
    }
};

export const updateNotificationById = async (id, notificationData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/notifications/${id}`, notificationData);
        return response.data;
    } catch (error) {
        console.error(`Error updating notification with id ${id}:`, error);
        throw error;
    }
};

export const deleteNotificationById = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/notifications/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting notification with id ${id}:`, error);
        throw error;
    }
};

export const deleteNotificationBatch = async (date) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/notifications/batch`, date);
        return response.data;
    } catch (error) {
        console.error(`Error deleting notification on ${date}:`, error);
        throw error;
    }
};

export const scheduleNotification = async (notificationData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/notifications/schedule`, notificationData);
        return response.data;
    } catch (error) {
        console.error(`Error scheduling notification:`, error);
        throw error;
    }
};
