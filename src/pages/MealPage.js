import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/NavBarComponent';

const MealPage = () => {
  const { idMeal } = useParams();
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();

        if (data.meals && data.meals[0]) {
          setMealDetails(data.meals[0]);
        } else {
          setError('Meal not found');
        }
      } catch (error) {
        console.error('Error fetching meal details:', error);
        setError('Error fetching meal details');
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [idMeal]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!mealDetails) {
    return <div>Meal not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-4">
            <img
              src={mealDetails.strMealThumb}
              className="img-fluid rounded"
              alt={mealDetails.strMeal}
            />
          </div>
          <div className="col-md-8">
            <h2>{mealDetails.strMeal}</h2>
            <p>{mealDetails.strInstructions}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPage;

