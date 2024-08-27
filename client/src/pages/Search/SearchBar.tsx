// src/pages/search/SearchBar.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

interface Recipe {
    id: number;
    name: string;
}

export const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [results, setResults] = useState<Recipe[]>([]);
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);

    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        setAllRecipes([
            { id: 1, name: 'Chocolate Cake' },
            { id: 2, name: 'Caesar Salad' },
            { id: 3, name: 'Beef Stroganoff' },
            { id: 4, name: 'Vegetable Stir Fry' }
        ]);
    }, []);

    useEffect(() => {
        if (searchTerm) {
            const firstLetter = searchTerm[0].toLowerCase();
            const filteredResults = allRecipes.filter(recipe =>
                recipe.name.toLowerCase().startsWith(firstLetter)
            );
            setResults(filteredResults);
        } else {
            setResults([]);
        }
    }, [searchTerm, allRecipes]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleResultClick = (recipe: Recipe) => {
        navigate('/recipe/${ recipe.id}'); // Navigate to the recipe details page
        setSearchTerm(recipe.name);
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
                        onChange={handleSearchChange} />
                    {searchTerm && (
                        <div className="search-results">
                            {results.length > 0 ? (
                                results.map(recipe => (
                                    <div
                                        key={recipe.id}
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