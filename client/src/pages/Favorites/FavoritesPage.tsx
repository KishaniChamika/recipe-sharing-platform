import React, { useState, useEffect } from 'react';
import { Recipe } from '../Recipes/types/recipe';
// import { getFavoriteRecipes } from '../../api/recipeService';
import './FavoritesPage.css';

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const data = await getFavoriteRecipes();
        setFavorites(data);
      } catch (error) {
        console.error('Failed to fetch favorite recipes:', error);
      }
    };

    fetchFavorites();
  }, []);

  return (
    <div className="favorites-page">
      <h1>Your Favorite Recipes</h1>
      {favorites.length > 0 ? (
        <div className="recipe-card-container">
          {favorites.map((recipe) => (
            <div className="recipe-card" key={recipe._id}>
              <img src={recipe.image} alt={recipe.name} className="recipe-image" />
              <div className="recipe-content">
                <h2>{recipe.name}</h2>
                <p className="recipe-category">{recipe.category}</p>
                <div className="favorite-icon">
                  <i className="fas fa-heart"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite recipes yet!</p>
      )}
    </div>
  );
};

export default FavoritesPage;
