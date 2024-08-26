import React from 'react';
import { useParams } from 'react-router-dom';
import './CategoryRecipe.css'; // Assuming this is where you'd style the recipe page

const RecipeCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <div className="recipe-category-page">
      <h1>{category} Recipes</h1>
      {/* Placeholder for displaying recipes */}
    </div>
  );
};

export default RecipeCategoryPage;
