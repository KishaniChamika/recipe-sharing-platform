import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

// Importing images using require()
const homeIcon = require('./home-icon.png');
const searchIcon = require('./search-icon.png');
const userIcon = require('./user-icon.png');
const favoritesIcon = require('./favorites-icon.png');
const categoryIcon = require('./category-icon.png');

const HomePage: React.FC = () => {
    return (
      <div className="home-container">
        <div className="banner">
          <div className="banner-content">
            <h1>Welcome to RecipeHub</h1>
            <p>Where Every Recipe Tells a Story - Discover, Create, Share!</p>
            <Link to="/login" className="get-started-button">Get Started</Link>
          </div>
        </div>
        <div className="features">
          <h2 className="features-heading">Features We Provide</h2>
          <div className="feature-item">
            <Link to="/home">
              <img src={homeIcon} alt="Home" className="icon" />
              <h3>Home</h3>
              <p>Access your main dashboard, view featured recipes, and explore new content.</p>
            </Link>
          </div>
          <div className="feature-item">
            <Link to="/search">
              <img src={searchIcon} alt="Search" className="icon" />
              <h3>Search</h3>
              <p>Find recipes quickly with our powerful search feature. Filter by ingredients, categories, and more.</p>
            </Link>
          </div>
          <div className="feature-item">
            <Link to="/profile">
              <img src={userIcon} alt="Profile" className="icon" />
              <h3>Profile</h3>
              <p>Manage your profile, view your submitted recipes, and track your activity.</p>
            </Link>
          </div>
          <div className="feature-item">
            <Link to="/favorites">
              <img src={favoritesIcon} alt="Favorites" className="icon" />
              <h3>Favorites</h3>
              <p>Save and view your favorite recipes for easy access.</p>
            </Link>
          </div>
          <div className="feature-item">
            <Link to="/categories">
              <img src={categoryIcon} alt="Category" className="icon" />
              <h3>Category</h3>
              <p>Browse recipes by category to find exactly what you're looking for.</p>
            </Link>
          </div>
        </div>
      </div>
    );
};  

export default HomePage;
