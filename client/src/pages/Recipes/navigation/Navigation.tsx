import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <Link to="/recipes">Recipes</Link>
    </nav>
  );
};

export default Navigation;
