import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../types/recipe';
import './AddRecipe.css';

const AddRecipe: React.FC = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe>({
    id: '',
    name: '',
    ingredients: '',
    instructions: '',
    image: '',
    isFavorite: false,
    category: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({ ...prevRecipe, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="add-recipe-page">
      <div className="add-recipe">
        <h2>Add New Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Recipe Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Recipe Name"
              value={recipe.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients</label>
            <textarea
              id="ingredients"
              name="ingredients"
              placeholder="Ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              placeholder="Instructions"
              value={recipe.instructions}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select id="category" name="category" value={recipe.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Soup">Soup</option>
              <option value="Dessert">Dessert</option>
              <option value="Salad">Salad</option>
              <option value="Beverage">Beverage</option>
              <option value="Appetizers">Appetizers</option>
              <option value="Main Courses">Main Course</option>
              <option value="Baked Item">Baked Item</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
            <button type="button" className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
