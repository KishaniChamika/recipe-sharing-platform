import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddRecipe.css';


const categories = ['Select Category', 'Soup', 'Desserts', 'Salads', 'Beverages', 'Appetizers', 'Main Courses', 'Baked'];

const AddRecipe: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (name && imageUrl && ingredients && instructions && category) {
      const recipeData = {
        name,
        image: imageUrl,
        ingredients,
        instructions,
        category
      };
  
      try {
        const response = await fetch('http://13.208.240.223:3000/api/recipes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(recipeData),
        });
  
        if (response.ok) {
          const result = await response.json();
          console.log('Recipe added:', result);
          alert('Recipe added successfully!');
          navigate('/recipes');
        } else {
          const errorData = await response.json();
          console.error('Failed to add recipe:', errorData);
          alert('Failed to add recipe.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };
  
  

  return (
    <div className="add-recipe-page">
      <div className="add-recipe">
        <h2>Add New Recipe</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label htmlFor="name">Recipe Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="imageUrl">Recipe Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients (comma separated):</label>
            <input
              type="text"
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="instructions">Instructions:</label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows={4}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
          <button type="button" className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;