import axios from 'axios';

// Set the base URL for your backend API
const API_URL = 'http://localhost:3001';

// Function to handle user registration
export const registerUser = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { username, email, password });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'An error occurred during registration.');
    }
};

