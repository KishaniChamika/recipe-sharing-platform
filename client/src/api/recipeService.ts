import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Base URL of your backend

export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const getRecipeById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe by ID:', error);
    throw error;
  }
};

export const addRecipe = async (recipeData: FormData) => {
  try {
    const response = await axios.post(`${API_URL}/recipes`, recipeData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};

export const getFavoriteRecipes = async () => {
  try {
    const response = await axios.get(`${API_URL}/favorites`);
    return response.data;
  } catch (error) {
    console.error('Error fetching favorite recipes:', error);
    throw error;
  }
};
