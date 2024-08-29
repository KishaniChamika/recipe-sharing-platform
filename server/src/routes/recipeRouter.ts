import express from 'express';
<<<<<<< HEAD
import { addRecipe, getRecipes,getRecipeById, updateRecipeFavoriteStatus,getFavoriteRecipes, searchRecipes  } from '../controllers/recipeController';
=======
import { addRecipe, getRecipes,getRecipeById, updateRecipeFavoriteStatus,getFavoriteRecipes,searchRecipes  } from '../controllers/recipeController';
>>>>>>> e05efe8d04d3750bc40cb70bf02ba0cae156acd1
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
