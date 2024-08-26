import React, { useState } from 'react';
import { Recipe } from '../types/recipe';
import './AddRecipeForm.css';

interface AddRecipeFormProps {
  onAddRecipe: (recipe: Recipe) => void;
}

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack'];

const AddRecipeForm: React.FC<AddRecipeFormProps> = ({ onAddRecipe }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [ingredients, setIngredients] = useState<string>('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && image && ingredients && instructions && category) {
      const newRecipe: Recipe = {
        id: Date.now().toString(),
        name,
        image: URL.createObjectURL(image),
        ingredients,
        instructions,
        category,
        isFavorite: false
      };
      onAddRecipe(newRecipe);
      setName('');
      setImage(null);
      setIngredients('');
      setInstructions('');
      setCategory(categories[0]);
    }
  };

  return (
    <div className="add-recipe-form">
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="image">Recipe Image:</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
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
      </form>
    </div>
  );
};

export default AddRecipeForm;
