import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import CategoryCard from './CategoryCard'; // Importing the modular CategoryCard component

const categories = [
  { name: 'Soup', image: require('./soup.jpg') },
  { name: 'Desserts', image: require('./desserts.jpg') },
  { name: 'Salads', image: require('./salads.jpg') },
  { name: 'Beverages', image: require('./beverages.jpg') },
  { name: 'Appetizers', image: require('./appetizers.jpg') },
  { name: 'Main Courses', image: require('./main_courses.jpg') },
  { name: 'Baked Items', image: require('./baked_items.jpg') },
];
