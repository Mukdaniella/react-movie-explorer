import React from "react";
import MovieCard from "../components/moviecard";
import { useFavorites } from "../hooks/usefavorites";

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="px-6 py-8 bg-black min-h-screen text-white">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">My Favorites</h2>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-400">You have 0 favorite movies</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieCard
  key={movie.id}
  movie={movie}
  onAddFavorite={() => removeFavorite(movie.id)}
  isFavorite={true}
/>

          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
