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
import { Search } from 'react-router-dom';
import RecipeDetails from './pages/Recipes/RecipeDetails/RecipeDetails';
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
        {/* HomePage, Categories, and About routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/about" element={<About />} /> {/* Updated to use About component */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/search" element={<SearchBar/>}/>
      </Routes>
    </Router>
  );
};

export default App;
