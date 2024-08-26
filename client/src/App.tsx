// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import { Auth } from './pages/Authentication/auth';
import RecipeView from './pages/Recipes/RecipeView/RecipeView';
import AddRecipe from './pages/Recipes/AddRecipe/AddRecipe';
import RecipeDetails from './pages/Recipes/RecipeDetails/RecipeDetails';
import Categories from './pages/Categories/Categories';
import RecipeCategoryPage from './pages/RecipeCategoriesPage/RecipeCategoryPage';
//import Favorite from './pages/Favorites';
import UserProfile from './pages/UserProfile';
import { About } from './pages/About/about'; // Named import
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const isLoggedIn = false; // Set this based on authentication status

  //add this later <Route path="/favorites" element={<Favorite />} />

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes/:category" element={<RecipeCategoryPage />} />
        <Route path="/recipe-view" element={<RecipeView />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
