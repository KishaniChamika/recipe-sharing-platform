// src/types/recipe.ts
export interface Recipe {
  _id: any;
  name: string;
  ingredients: string;  
  instructions: string;
  image: string;
  isFavorite: boolean;
  category: string;
}
