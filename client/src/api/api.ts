// src/api/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; 

export const registerUser = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
            username,
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw new Error('An unexpected error occurred');
    }
};
// Function to handle login
export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'An error occurred during login.');
    }
};

// Function to get user profile
export const getUserProfile = async () => {
    const token = localStorage.getItem('accessToken');
    const response = await axios.get(`${API_BASE_URL}/user`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data.user;
};

// Function to update user profile
export const updateUserProfile = async (data: { firstname: string, lastname: string, bio: string, avatar?: File | null }) => {
    const token = localStorage.getItem('accessToken');
    const formData = new FormData();
    formData.append('firstname', data.firstname);
    formData.append('lastname', data.lastname);
    formData.append('bio', data.bio);
    if (data.avatar) {
        formData.append('avatar', data.avatar);
    }

    const response = await axios.put(`${API_BASE_URL}/user`, formData, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
        }
    });

    return response.data.user;
};