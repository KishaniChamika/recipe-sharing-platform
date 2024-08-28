import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Categories from './pages/Categories/Categories';
import Navbar from './components/Navbar';
import RecipeView from './pages/Recipes/RecipeView/RecipeView';
import RecipeDetails from './pages/Recipes/RecipeDetails/RecipeDetails';
import AddRecipe from './pages/Recipes/AddRecipe/AddRecipe';
import { About } from './pages/About/about'; // Named import
import { ProfilePage } from './pages/UserProfile/profile';
import { Auth } from './pages/Authentication/auth'; // Named import
import { SearchBar } from './pages/Search/SearchBar';

const App: React.FC = () => {
  // State to track user login status
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
    // Additional login logic, e.g., saving a token to local storage
    localStorage.setItem('accessToken', 'your-access-token');
  };

  // Check authentication status when the component mounts
  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of the token
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        {/* HomePage, Categories, and About routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} /> {/* Updated to use About component */}
        
        {/* Recipe-related routes */}
        <Route path="/recipes" element={<RecipeView />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        
        {/* Profile, Authentication, and Search routes */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Auth onLogin={handleLogin} />} /> {/* Pass handleLogin as a prop */}
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </Router>
  );
};

export default App;
