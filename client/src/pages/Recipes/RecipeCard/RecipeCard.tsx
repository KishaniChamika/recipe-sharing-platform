import React from 'react';
import { Recipe } from '../types/recipe';
import './RecipeCard.css';

interface RecipeCardProps {
  recipe: Recipe;
  onToggleFavorite: (id: string) => void;
  onViewDetails: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onToggleFavorite, onViewDetails }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-name">{recipe.name}</div>
      <div className="recipe-category">{recipe.category}</div>
      <div className="action-buttons">
        <div
          onClick={() => onToggleFavorite(recipe.id)}
          className={`heart-icon ${recipe.isFavorite ? 'favorite' : ''}`}
        >
          {/* Custom SVG heart icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={recipe.isFavorite ? 'red' : 'none'}
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.432 6.432 0 0 1 16.5 3 5.507 5.507 0 0 1 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
          </svg>
        </div>
        <button
          className="view-details-btn"
          onClick={() => onViewDetails(recipe.id)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
