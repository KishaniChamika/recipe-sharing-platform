import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import CategoryCard from './CategoryCard'; // Ensure this component is correctly defined

// Import images statically
import soupImage from './soup.jpg';
import dessertsImage from './desserts.jpg';
import saladsImage from './salads.jpg';
import beveragesImage from './beverages.jpg';
import appetizersImage from './appetizers.jpg';
import mainCoursesImage from './main_courses.jpg';
import bakedItemsImage from './baked_items.jpg';

// Define the categories with imported images
const categories = [
  { name: 'Soup', image: soupImage },
  { name: 'Desserts', image: dessertsImage },
  { name: 'Salads', image: saladsImage },
  { name: 'Beverages', image: beveragesImage },
  { name: 'Appetizers', image: appetizersImage },
  { name: 'Main Courses', image: mainCoursesImage },
  { name: 'Baked Items', image: bakedItemsImage },
];

const Categories: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    navigate(`/category/${encodeURIComponent(category)}`); // Navigate to the correct category route
  };

  return (
    <div className="categories-page">
      <h1>Recipe Categories</h1>
      <div className="categories-container">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
            onClick={() => handleClick(category.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
