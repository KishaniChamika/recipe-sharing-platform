import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  isLoggedIn: boolean;
  handleLogout: () => void; // Function to handle logout
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">RecipeHub</Link>
      </div>
      <ul className="nav-links">
        {/* Common links for all users */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/search">Search</Link></li> {/* Search link */}

        {/* Links visible only to logged-in users */}
        {isLoggedIn ? (
          <>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            {/* Restore Logout as a link */}
            <li><Link to="#" onClick={handleLogout} className="nav-link">Logout</Link></li>
          </>
        ) : (
          /* Link for non-logged-in users */
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
