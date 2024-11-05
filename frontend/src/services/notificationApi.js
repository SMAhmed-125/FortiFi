import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getNotificationsByUserId = async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/notifications/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching notification with userId ${userId}:`, error);
      throw error;
    }
};

export const getNotificationsByUserIdAndGoalId = async (userId, goalId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/notifications/${userId}/${goalId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching notification with userId ${userId} and ${goalId}:`, error);
      throw error;
    }
};

export const createNotification = async (userId, goalId, notificationData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/notifications/${userId}/${goalId}`, notificationData);
        return response.data;
    } catch (error) {
        console.error(`Error creating notification:`, error);
        throw error;
    }
};

export const updateNotificationById = async (userId, goalId, notificationData) => {
    try {
        const response = await axios.patch(`${API_BASE_URL}/notifications/${userId}/${goalId}`, notificationData);
        return response.data;
    } catch (error) {
        console.error(`Error updating notification with userId ${userId}:`, error);
        throw error;
    }
};

export const deleteNotificationByUserIdAndGoalId = async (userId, goalId) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/notifications/${userId}/${goalId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting notification with userId ${userId}:`, error);
        throw error;
    }
};

export const deleteMultipleNotificationsByUserId = async (userId, notificationData) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/notifications/${userId}`, notificationData);
        return response.data;
    } catch (error) {
        console.error(`Error deleting notification`, error);
        throw error;
    }
};

