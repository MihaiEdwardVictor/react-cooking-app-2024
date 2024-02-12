// Favorites.js

import React, { useEffect, useState } from 'react';
import MealCard from '../components/MealCard';
import Navbar from '../components/NavBarComponent';

const Favorites = () => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState([]);

  useEffect(() => {
    const fetchFavoriteMeals = async () => {
      // Fetch favorite meals from local storage when the component mounts
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      setFavoriteMeals(storedFavorites);

      // Fetch details for each favorite meal
      const detailsPromises = storedFavorites.map((mealId) => fetchMealDetails(mealId));
      const details = await Promise.all(detailsPromises);
      setMealDetails(details.filter(Boolean)); // Filter out any null results
    };

    fetchFavoriteMeals();
  }, []);

  const fetchMealDetails = async (mealId) => {
    try {
      // Adjust the API endpoint based on your API structure
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();

      if (data.meals) {
        const meal = data.meals[0];
        return {
          id: meal.idMeal,
          title: meal.strMeal,
          image: meal.strMealThumb,
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching meal details:', error);
      return null;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="mt-3 mb-4">Favorite Meals</h2>
        <div className="row">
          {mealDetails.map((meal) => (
            <div key={meal.id} className="col-md-4 mb-3">
              <MealCard id={meal.id} title={meal.title} image={meal.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
