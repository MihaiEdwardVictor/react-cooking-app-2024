import React from 'react';
import MealCard from '../components/MealCard'; // Assuming you have a MealCard component

const MealsContainer = ({ responseData }) => {
  const renderMealCards = () => {
    if (!responseData.meals) return null;

    // Shuffle the meals array randomly
    const shuffledMeals = [...responseData.meals].sort(() => Math.random() - 0.5);

    // Take the first 9 meals for a 3x3 grid
    const selectedMeals = shuffledMeals.slice(0, 9);

    
    return selectedMeals.map((meal) => (
      <div key={meal.idMeal} className="col-md-4 mb-3">
        <MealCard
          idMeal={meal.idMeal}
          title={meal.strMeal}
          image={meal.strMealThumb}
          description={meal.strInstructions}
        />
      </div>
    ));
  };

  return (
    <div className="row">
      {renderMealCards()}
    </div>
  );
};

export default MealsContainer;  