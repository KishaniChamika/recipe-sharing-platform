import React, { useState } from 'react';
import RecipeCard from '../../Recipes/RecipeCard/RecipeCard';
import { Recipe } from '../types/recipe';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import './RecipeView.css';

const initialRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Chocolate Cake',
    image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
    ingredients: 'Flour, Sugar, Cocoa Powder, Eggs',
    instructions: 'Mix and bake at 350°F for 30 minutes.',
    category: 'Dessert',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Caesar Salad',
    image: 'https://via.placeholder.com/150',
    ingredients: 'Lettuce, Croutons, Caesar Dressing',
    instructions: 'Toss and serve.',
    category: 'Lunch',
    isFavorite: false,
  },
];

const RecipeView: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const navigate = useNavigate();

  const handleToggleFavorite = (id: string) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
      )
    );
  };

  const handleViewDetails = (id: string) => {
    navigate(`/recipes/${id}`);
  };

  return (
    <div className="recipe-view-page">
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onToggleFavorite={handleToggleFavorite}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
      <div className="add-recipe-button">
        <button onClick={() => navigate('/add-recipe')}>
          <FaPlusCircle size={40} color="#f8931f" />
        </button>
      </div>
    </div>
  );
};

export default RecipeView;
