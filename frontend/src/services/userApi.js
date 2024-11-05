import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getUserById = async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with userId ${userId}:`, error);
      throw error;
    }
};

export const updateUser = async (userId, userData) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with userId ${userId}:`, error);
      throw error;
    }
};

export const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with userId ${userId}:`, error);
      throw error;
    }
};

export const registerUser = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/register`, userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
};

export const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users/login`, userData);
      return response.data; // token in response
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
};
