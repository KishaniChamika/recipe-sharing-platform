import React from 'react';
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
            <a href="https://www.recipehub.com/login" className="get-started-button">Get Started</a>
          </div>
        </div>
      </div>
    );
};  