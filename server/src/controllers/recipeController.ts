import { Request, Response } from 'express';
import Recipe from '../models/Recipe';

// Get all recipes
export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch recipes', error });
  }
};

// Add a new recipe
export const addRecipe = async (req: Request, res: Response) => {
  try {
    const { name, image, ingredients, instructions, category } = req.body;

    const newRecipe = new Recipe({ name, image, ingredients, instructions, category });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error('Failed to add recipe:', error);
    res.status(500).json({ message: 'Failed to add recipe', error });
  }
};

// Get a recipe by ID
export const getRecipeById = async (req: Request, res: Response) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'Recipe not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch recipe', error });
  }
};

// Update favorite status of a recipe
export const updateRecipeFavoriteStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isFavorite } = req.body;

    // Find the recipe by ID and update the isFavorite status
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,
      { isFavorite },
      { new: true } // This option returns the updated document
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error('Failed to update favorite status:', error);
    res.status(500).json({ message: 'Failed to update favorite status', error });
  }
};

// Get all favorite recipes
export const getFavoriteRecipes = async (req: Request, res: Response) => {
  try {
    const favoriteRecipes = await Recipe.find({ isFavorite: true });
    res.status(200).json(favoriteRecipes);
  } catch (error) {
    console.error('Failed to fetch favorite recipes:', error);
    res.status(500).json({ message: 'Failed to fetch favorite recipes' });
  }
};

export const searchRecipes = async (req: Request, res: Response) => {
  try {
      const searchTerm = req.query.searchTerm as string;
      const recipes = await Recipe.find({ name: new RegExp(searchTerm, 'i') });
      res.status(200).json(recipes);
  } catch (error) {
      res.status(500).json({ message: 'Error searching recipes', error });
  }
};