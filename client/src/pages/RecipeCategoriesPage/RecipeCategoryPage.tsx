import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipes } from '../../api/recipeService';
import { Recipe } from '../Recipes/types/recipe';
import RecipeCard from '../Recipes/RecipeCard/RecipeCard';

const RecipeCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        if (category) {
          const fetchedRecipes = await getRecipes(category);
          setRecipes(fetchedRecipes);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [category]);

  return (
    <div className="recipe-category-page">
      <h1>{category} Recipes</h1>
      <div className="recipe-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              onToggleFavorite={(id: string, isFavorite: boolean) => {
                console.log(`Toggle favorite for recipe ${id} not implemented`);
              }}
              onViewDetails={(id: string) => {
                console.log(`View details for recipe ${id} not implemented`);
              }}
            />
          ))
        ) : (
          <p>No recipes found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeCategoryPage;
