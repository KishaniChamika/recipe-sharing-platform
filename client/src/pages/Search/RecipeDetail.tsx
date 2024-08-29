import React,{useState,useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Recipe } from '../../pages/Recipes/types/recipe';
import './RecipeDetails.css';
import { getRecipeById } from '../../api/recipeService';

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (!id) return; // Early return if id is undefined

      try {
        const data = await getRecipeById(id as string); // Use type assertion to assure TypeScript that id is a string
        setRecipe(data);
      } catch (error) {
        console.error('Failed to fetch recipe details', error);
      }
    };

    fetchRecipe();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;


  if (!recipe) {
    return <div>Recipe not found</div>;
  }
  return (
    <div className="recipe-details-container">
      <div className="recipe-details-card">
      <img src={`http://localhost:3000${recipe.image}`} alt={recipe.name} className="recipe-details-image" />
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
