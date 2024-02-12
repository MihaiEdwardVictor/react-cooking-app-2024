import React from "react";
import { Link } from "react-router-dom";

const FavoritesButton = () => {
  return (
    <Link to="/favorites" className="btn btn-primary my-3">
      View Favorites
    </Link>
  );
};

export default FavoritesButton;
