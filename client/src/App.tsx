import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Categories from './pages/Categories/Categories';
import Navbar from './components/Navbar';
import RecipeView from './pages/Recipes/RecipeView/RecipeView';
import RecipeDetails from './pages/Recipes/RecipeDetails/RecipeDetails';
import AddRecipe from './pages/Recipes/AddRecipe/AddRecipe';
import { About } from './pages/About/about';
import { ProfilePage } from './pages/UserProfile/profile';
import { Auth } from './pages/Authentication/auth';
import { SearchBar } from './pages/Search/SearchBar';
import FavoritesPage from './pages/Favorites/FavoritesPage';
import RecipeCategoryPage from './pages/RecipeCategoriesPage/RecipeCategoryPage'; // Import RecipeCategoryPage

const App: React.FC = () => {
  // State to handle user's login status
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user is logged in by verifying the token in localStorage
    const token = localStorage.getItem('accessToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Define the handleLogout function inside the Router context using a child component
  const AppContent = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      // Clear token and update login state
      localStorage.removeItem('accessToken');
      setIsLoggedIn(false);
      navigate('/login'); // Redirect to login page after logout
    };

    return (
      <>
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          {/* HomePage, Categories, and About routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />

          {/* Recipe-related routes */}
          <Route path="/recipes" element={<RecipeView />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={isLoggedIn ? <AddRecipe /> : <Auth setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/category/:category" element={<RecipeCategoryPage />} /> {/* Correct route for RecipeCategoryPage */}
          
          {/* Profile, Authentication, and Search routes */}
          <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <Auth setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Auth setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </>
    );
  };

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
