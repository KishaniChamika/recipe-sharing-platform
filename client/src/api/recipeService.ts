import axios from 'axios';
import { Recipe } from '../pages/Recipes/types/recipe';

const API_URL = 'http://localhost:3000/api'; // Base URL of your backend

// Function to get recipes with optional category filtering
export const getRecipes = async (category?: string): Promise<Recipe[]> => {
  try {
    // Construct the request URL with query parameters
    const response = await axios.get<Recipe[]>(`${API_URL}/recipes`, {
      params: { category }, // Pass category as a query parameter
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    // Handle error appropriately
    throw new Error('Could not fetch recipes. Please try again later.');
  }
};

// Function to get a single recipe by ID
export const getRecipeById = async (id: string): Promise<Recipe> => {
  try {
    const response = await axios.get<Recipe>(`${API_URL}/recipes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe by ID:', error);
    // Handle error appropriately
    throw new Error('Could not fetch recipe details. Please try again later.');
  }
};

// Function to add a new recipe with form data
export const addRecipe = async (recipeData: FormData): Promise<Recipe> => {
  try {
    const response = await axios.post<Recipe>(`${API_URL}/recipes`, recipeData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding recipe:', error);
    // Handle error appropriately
    throw new Error('Could not add recipe. Please try again later.');
  }
};

// Function to get favorite recipes
export const getFavoriteRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await axios.get<Recipe[]>(`${API_URL}/favorites`);
    return response.data;
  } catch (error) {
    console.error('Error fetching favorite recipes:', error);
    // Handle error appropriately
    throw new Error('Could not fetch favorite recipes. Please try again later.');
  }
};
