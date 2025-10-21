import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MovieDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  if (!movie) {
    return (
      <div className="px-6 py-8 bg-black min-h-screen text-white text-center">
        <p className="text-gray-400 mb-4">Movie not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 bg-black min-h-screen text-white flex flex-col md:flex-row items-center gap-8">
      <img
        src={movie.image}
        alt={movie.name}
        className="w-full md:w-1/3 rounded-lg object-cover"
      />
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">{movie.name}</h2>
        <p className="text-gray-300 mb-4">{movie.summary || "No description available."}</p>
        <p className="text-cyan-500 font-semibold">Category: {movie.category}</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
