import express from 'express';
import { addRecipe, getRecipes,getRecipeById, updateRecipeFavoriteStatus  } from '../controllers/recipeController';
import multer from 'multer';

const router = express.Router();

const upload = multer({ dest: 'uploads/images' });

router.post('/recipes', addRecipe);
router.get('/recipes', getRecipes);
router.get('/recipes/:id', getRecipeById);
router.put('/recipes/:id/favorite',upload.none(), updateRecipeFavoriteStatus);

export default router;
