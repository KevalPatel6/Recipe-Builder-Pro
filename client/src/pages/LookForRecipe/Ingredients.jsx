import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_INGREDIENTS } from '../../utils/queries';
import { Link } from "react-router-dom";

function Ingredients() {
  const { loading, error, data } = useQuery(GET_ALL_INGREDIENTS);
  const [ingredientInput, setIngredientInput] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (data) {
      // Use the data directly from the GraphQL query to set up your ingredient list
      const allIngredients = data.getIngredients;

      // Filter ingredients based on the input text
      const filtered = allIngredients.filter((ingredient) =>
        ingredient.name.toLowerCase().includes(ingredientInput.toLowerCase())
      );
      setFilteredIngredients(filtered);
    }
  }, [data, ingredientInput]);

  // Function to handle ingredient input change and show/hide the dropdown
  const handleIngredientInputChange = (e) => {
    const inputText = e.target.value;
    setIngredientInput(inputText);
    setShowDropdown(inputText.length > 0); // Show dropdown when input has text
  };

  // Function to select an ingredient from the dropdown
  const selectIngredient = (ingredientName) => {
    setIngredientInput(ingredientName);
    setShowDropdown(false); // Hide the dropdown after selection
  };

  // Function to add selected ingredient to the list
  const addIngredient = () => {
    if (ingredientInput && !selectedIngredients.includes(ingredientInput)) {
      setSelectedIngredients([...selectedIngredients, ingredientInput]);
      setIngredientInput('');
    }
  };

  // Function to remove an ingredient from the list
  const removeIngredient = (ingredientToRemove) => {
    const updatedIngredients = selectedIngredients.filter(
      (ingredient) => ingredient !== ingredientToRemove
    );
    setSelectedIngredients(updatedIngredients);
  };

  return (
    <div className="header-container">
      <div id="searchContainer" className="container">
        <div>
          <h1>Ingredient List</h1>
          <div className="input-button-container">
            <input
              type="text"
              id="ingredientInput"
              placeholder="Enter ingredient"
              value={ingredientInput}
              onChange={handleIngredientInputChange}
            />
            {showDropdown && (
              <div className="dropdown">
                {filteredIngredients.map((ingredient, index) => (
                  <div
                    key={index}
                    onClick={() => selectIngredient(ingredient.name)}
                    className="dropdown-item"
                  >
                    {ingredient.name}
                  </div>
                ))}
              </div>
            )}
            <button onClick={addIngredient}>Add</button>
          </div>
        </div>
      </div>

      <div>
        <div id="ingredientList">
          <h2>Selected Ingredients</h2>
          <ul>
            {selectedIngredients.map((ingredient, index) => (
              <li key={index}>
                <div className="ingredient-card">
                  <h3>{ingredient}</h3>
                  <button onClick={() => removeIngredient(ingredient)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Link to="/Choose-Meal">
          <button>Choose a Meal</button>
        </Link>
      </div>
    </div>
  );
}

export default Ingredients;
