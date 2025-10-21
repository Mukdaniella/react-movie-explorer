import React from "react";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie, onAddFavorite, isFavorite }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="bg-black text-white rounded-lg shadow-lg p-3 flex flex-col items-center cursor-pointer hover:shadow-cyan-500/50">
      <img
        src={movie.image}
        alt={movie.name}
        className="w-40 h-56 object-cover rounded mb-3"
        onClick={handleClick}
      />
      <h3 className="font-semibold text-cyan-400">{movie.name}</h3>
      <p className="text-gray-300 text-sm">{movie.category}</p>
      <button
        className="mt-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-1 rounded"
        onClick={() => onAddFavorite(movie)}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}

      </button>
    </div>
  );
}

export default MovieCard;
