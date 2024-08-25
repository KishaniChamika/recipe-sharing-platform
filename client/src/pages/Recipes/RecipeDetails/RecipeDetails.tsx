import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Recipe } from '../types/recipe';
import './RecipeDetails.css';

// Sample data for demonstration; replace with actual data fetching in your app
const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Chocolate Cake',
    image: 'https://media.gettyimages.com/id/1199607353/photo/fresh-chicken-salad.jpg?s=612x612&w=gi&k=20&c=vYvQ8Yp_K4IOhcNl02vAyuVDSfYntOLTiRqjVcNpXFg=',
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

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="recipe-details-container">
      <div className="recipe-details-card">
        <img src={recipe.image} alt={recipe.name} className="recipe-details-image" />
        <div className="recipe-details-content">
          <h2 className="recipe-details-name">{recipe.name}</h2>
          <p className="recipe-details-category">{recipe.category}</p>
          <h3>Ingredients:</h3>
          <p>{recipe.ingredients}</p>
          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>
        </div>
        
      </div>
    </div>
  );
};

export default RecipeDetails;
