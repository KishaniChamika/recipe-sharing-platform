import express from 'express';
import { addRecipe, getRecipes,getRecipeById, updateRecipeFavoriteStatus,getFavoriteRecipes,searchRecipes  } from '../controllers/recipeController';
import multer from 'multer';

const router = express.Router();

const upload = multer({ dest: 'uploads/images' });

router.post('/recipes', addRecipe);
router.get('/recipes', getRecipes);
router.get('/recipes/search', searchRecipes);
router.get('/recipes/:id', getRecipeById);
router.put('/recipes/:id/favorite',upload.none(), updateRecipeFavoriteStatus);
router.get('/favorites', getFavoriteRecipes); // New route for fetching favorite recipes

export default router;
