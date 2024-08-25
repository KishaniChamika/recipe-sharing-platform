// src/types/recipe.ts
export interface Recipe {
    id: string;
    name: string;
    ingredients: string;  
    instructions: string;
    image: string;
    isFavorite: boolean;
    category: string;
  }
  