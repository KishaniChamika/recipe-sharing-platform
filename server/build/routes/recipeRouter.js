"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var recipeController_1 = require("../controllers/recipeController");
var multer_1 = __importDefault(require("multer"));
var router = express_1.default.Router();
var upload = (0, multer_1.default)({ dest: 'uploads/images' });
router.post('/recipes', recipeController_1.addRecipe);
router.get('/recipes', recipeController_1.getRecipes);
router.get('/recipes/search', recipeController_1.searchRecipes);
router.get('/recipes/:id', recipeController_1.getRecipeById);
router.put('/recipes/:id/favorite', upload.none(), recipeController_1.updateRecipeFavoriteStatus);
router.get('/favorites', recipeController_1.getFavoriteRecipes); // New route for fetching favorite recipes
exports.default = router;
