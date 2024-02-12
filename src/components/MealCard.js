import React, { useState, useEffect } from "react";
import favoriteIcon from "../assets/images/favorite_icon.png";
import favoriteIconFilled from "../assets/images/favorite_icon_clicked.png";
import { Link } from "react-router-dom";

const MealCard = ({ id, title, image }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check local storage for the favorite status when the component mounts
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(storedFavorites.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    // Toggle the favorite status
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);

    // Update local storage with the new favorite status
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = newFavoriteStatus
      ? [...storedFavorites, id]
      : storedFavorites.filter((mealId) => mealId !== id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="card">
      <Link
        to={`/meal/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={image} className="card-img-top" alt={title} />
      </Link>
      <div className="card-body d-flex gap-3">
        <h5 className="card-title mb-0">{title}</h5>
        <div className="card-text">
          <img
            height={25}
            src={isFavorite ? favoriteIconFilled : favoriteIcon}
            onClick={toggleFavorite}
            alt="Favorite Icon"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MealCard;
