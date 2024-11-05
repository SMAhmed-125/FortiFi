import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
});


export const getUserById = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with userId ${userId}:`, error);
      throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
      const response = await api.patch(`/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with userId ${userId}:`, error);
      throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
      const response = await api.delete(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with userId ${userId}:`, error);
      throw error;
    }
};

export const registerUser = async (userData) => {
    try {
      const response = await api.post(`/users/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
};

export const loginUser = async (userData) => {
    try {
      const response = await api.post(`/users/login`, userData);
      return response.data; 
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
};
