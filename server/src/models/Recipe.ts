import { Schema, model } from 'mongoose';

const recipeSchema = new Schema({
  name: String,
  image: String,
  ingredients: String,
  instructions: String,
  category: String,
  isFavorite: { type: Boolean, default: false },
});

const Recipe = model('Recipe', recipeSchema);

export default Recipe;
