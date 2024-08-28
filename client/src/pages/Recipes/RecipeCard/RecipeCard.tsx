import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './RecipeCard.css';

interface RecipeCardProps {
  recipe: {
    _id: string;
    name: string;
    category: string;
    image: string;
    isFavorite: boolean;
  };
  onToggleFavorite: (id: string, isFavorite: boolean) => void;
  onViewDetails: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onToggleFavorite, onViewDetails }) => {
  
  return (
    <div className="recipe-card">
      <img src={`http://localhost:3000${recipe.image}`} alt={recipe.name} />
      <div className="recipe-name">{recipe.name}</div>
      <div className="recipe-category">{recipe.category}</div>
      <div className="action-buttons">
        <FaHeart
          onClick={() => onToggleFavorite(recipe._id, recipe.isFavorite)}
          className={`heart-icon ${recipe.isFavorite ? 'favorite' : ''}`}
          color={recipe.isFavorite ? '#f44336' : '#ccc'}
          size={24}
        />
        <button
          className="view-details-btn"
          onClick={() => onViewDetails(recipe._id)}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
