// src/pages/search/SearchBar.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

interface Recipe {
    _id: string;
    name: string;
}

export const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [results, setResults] = useState<Recipe[]>([]);
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
    const navigate = useNavigate();

    const filterRecipesByName = (
        name: string,
        recipes: Recipe[],
        setResults: React.Dispatch<React.SetStateAction<Recipe[]>>
    ) => {
        console.log('Search term:', name); // Log search term
        console.log('All recipes:', recipes); // Log all recipes
    
        if (name === "") {
            setResults([]);
            return;
        }
    
        if (!name || !recipes.length) return;
    
        const searchResult: Recipe[] = [];
        const data = name.toLowerCase();
    
        for (const recipe of recipes) {
            // Safeguard: Check if recipe.name is defined
            if (recipe.name) {
                const recipeName = recipe.name.toLowerCase();
    
                if (recipeName.includes(data)) {
                    searchResult.push(recipe);
                }
            } else {
                console.warn('Recipe name is undefined:', recipe); // Warn if recipe.name is undefined
            }
        }
    
        console.log('Filtered results:', searchResult); // Log filtered results
        setResults(searchResult);
    };
    
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/recipes');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched recipes:', data); // Check data structure
                setAllRecipes(data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };
    
        fetchRecipes();
    }, []);

    useEffect(() => {
        filterRecipesByName(searchTerm, allRecipes, setResults);
    }, [searchTerm, allRecipes]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleResultClick = (recipe: Recipe) => {
        navigate(`/recipes/${recipe._id}`);
        setSearchTerm('');
        setResults([]);
    };

    return (
        <div className="search-container">
            <div className="search-content">
                <div className="search-header">
                    <h1 className="search-title">Find Your Favorite Recipes</h1>
                    <p className="search-subtitle">Discover delicious recipes from around the world</p>
                </div>
                <div className="search-bar-wrapper">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search for recipes..."
                        className="search-bar"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {searchTerm && (
                        <div className="search-results">
                            {results.length > 0 ? (
                                results.map(recipe => (
                                    <div
                                        key={recipe._id}
                                        className="search-result-item"
                                        onClick={() => handleResultClick(recipe)}
                                    >
                                        {recipe.name}
                                    </div>
                                ))
                            ) : (
                                <p className="search-no-results">No results found</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};