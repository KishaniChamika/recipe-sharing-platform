// src/api/api.ts
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust as needed

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
