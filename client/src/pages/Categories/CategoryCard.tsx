import React from 'react';
import './CategoryCard.css';

interface CategoryCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, onClick }) => {
    return (
      <div className="category-card" onClick={onClick}>
        <img src={image} alt={name} className="category-image" />
        <div className="category-title">{name}</div>
      </div>
    );
};

export default CategoryCard;

  