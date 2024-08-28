import React, { useEffect, useState } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import { Recipe } from '../types/recipe';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import './RecipeView.css';
import { getRecipes } from '../../../api/recipeService';

interface RecipeViewProps {
  recipes: Recipe[];
  onToggleFavorite: (id: any) => void;
  onViewDetails: (id: any) => void;
}
const RecipeView: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const navigate = useNavigate();

  
    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const data = await getRecipes();
          setRecipes(data);
        } catch (error) {
          console.error('Failed to fetch recipes', error);
        }
      };
  
      fetchRecipes();
    }, []);

  const handleAddRecipe = () => {
    navigate('/add-recipe');
  };

  const handleViewDetails = (id: any) => {
    navigate(`/recipe/${id}`);
  };

  const handleToggleFavorite = async (id: any, isFavorite: boolean) => {
    const formData = new FormData();
    formData.append('isFavorite', String(!isFavorite));
    try {
      const response = await fetch(`http://localhost:5002/api/recipes/${id}/favorite`, {
        method: 'PUT',
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Favorite status updated:', result);
        // alert('Favorite status updated successfully!');
        
        // Optionally update the state here if you need to
        setRecipes((prevRecipes) =>
          prevRecipes.map((recipe) =>
            recipe._id === id ? { ...recipe, isFavorite: isFavorite } : recipe
          )
        );
      } else {
        const errorData = await response.json();
        console.error('Failed to update favorite status:', errorData);
        // alert('Failed to update favorite status.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe._id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
      )
    );
  };
  

  return (
    <div className="recipe-view">
      <div className="recipe-list">
      {recipes.map((recipe) => (
  <RecipeCard
    key={recipe._id}  // Ensure each recipe has a unique ID
    recipe={recipe}
    onToggleFavorite={handleToggleFavorite}
    onViewDetails={handleViewDetails}
  />
))}
      </div>
      <div
        className="add-recipe-icon-wrapper"
        onClick={handleAddRecipe}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '20px',
          cursor: 'pointer',
        }}
      >
        <div
          style={{
            fontSize: '48px',
            color: '#f8931f',
            transition: 'transform 0.3s ease',
          }}
        >
          <FaPlusCircle />
          
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
