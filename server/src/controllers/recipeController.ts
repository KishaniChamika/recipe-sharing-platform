import { Request, Response } from 'express';
import Recipe from '../models/Recipe';

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch recipes', error });
  }
};

export const addRecipe = async (req: Request, res: Response) => {
    try {
      const { name, ingredients, instructions, category } = req.body;
      const image = req.file ? `/uploads/images/${req.file.filename}` : '';
  
      
  
      const newRecipe = new Recipe({ name, image, ingredients, instructions, category });
      await newRecipe.save();
      res.status(201).json(newRecipe);
    } catch (error) {
      console.error('Failed to add recipe:', error);
      res.status(500).json({ message: 'Failed to add recipe', error });
    }
  };

  
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

  export const updateRecipeFavoriteStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { isFavorite } = req.body;
        console.log(id,'  - status' , isFavorite)
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