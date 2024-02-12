import React, { useEffect, useState } from 'react';
import Navbar from '../components/NavBarComponent';
import SidebarComponent from '../components/SideBarComponent';
import FavoritesButton from '../components/FavoritesButtonComponent';
import MealCard from '../components/MealCard';

const HomePage = () => {
  const [meals, setMeals] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('beef');

  const filters = ['Beef', 'Chicken', 'Vegetarian'];

  const fetchData = async (searchValue) => {
    try {
      // Adjust the API endpoint based on the search term
      const endpoint = searchValue
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        : `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedFilter}`;

      const response = await fetch(endpoint);
      const responseJSON = await response.json();

      setMeals(responseJSON.meals || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSearch = (searchTerm) => {
    setSelectedFilter(null); // Clear any selected filter
    fetchData(searchTerm);
  };

  useEffect(() => {
    fetchData(selectedFilter);
  }, [selectedFilter]);

  useEffect(() => {
    console.log('Updated Meals State:', meals);
  }, [meals]);

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <FavoritesButton />
            <SidebarComponent filters={filters} onSelectFilter={handleFilterSelect} />
          </div>
          <div className="col-md-9">
            <h1>Cooking Recipes</h1>
            <div className="row">
              {meals.map((meal) => (
                <div key={meal.idMeal} className="col-md-4 mb-3">
                  <MealCard
                    id={meal.idMeal}
                    title={meal.strMeal}
                    image={meal.strMealThumb}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
