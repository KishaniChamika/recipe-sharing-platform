import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Categories from './pages/Categories/Categories';
import Navbar from './components/Navbar';
import Recipes from './pages/Recipes/RecipeView/RecipeView';
import { About } from './pages/About/about'; // Named import
//import Favorite from './pages/Favorite';
import { ProfilePage } from './pages/UserProfile/profile';
import { Auth } from './pages/Authentication/auth'; // Named import

const App: React.FC = () => {
  const isLoggedIn = false; // Set this based on authentication status

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} /> {/* Updated to use About component */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
