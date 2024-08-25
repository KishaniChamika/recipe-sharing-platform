// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { Auth } from './pages/Authentication/auth';
import RecipeView from './pages/Recipes/RecipeView/RecipeView';
import AddRecipe from './pages/Recipes/AddRecipe/AddRecipe';
import RecipeDetails from './pages/Recipes/RecipeDetails/RecipeDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Your friend's routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Auth />} />

        {/* Your routes */}
        <Route path="/recipe-view" element={<RecipeView />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
