import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Categories from './pages/Categories/Categories';
import Navbar from './components/Navbar';
import Recipes from './pages/Recipes/RecipeView/RecipeView';
import { About } from './pages/About/about';
import { ProfilePage } from './pages/UserProfile/profile';
import { Auth } from './pages/Authentication/auth';
import { SearchBar } from './pages/Search/SearchBar';

const App: React.FC = () => {
  // State to manage whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Function to handle login status change
  const handleLoginStatusChange = (status: boolean) => {
    setIsLoggedIn(status);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Auth onLogin={handleLoginStatusChange} />} />
        <Route path="/search" element={<SearchBar />} />
      </Routes>
    </Router>
  );
};

export default App;
