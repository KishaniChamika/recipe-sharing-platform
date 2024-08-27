import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
  isLoggedIn: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">RecipeHub</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
          <input type="text" placeholder="Search..." className="search-bar" />
        </li>
        {isLoggedIn ? (
          <>
            <li><Link to="/favorites">Favorites</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
