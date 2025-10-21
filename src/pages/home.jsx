import React, { useState } from "react";
import MovieCard from "../components/moviecard";
import SearchBar from "../components/searchbar";
import CategoryFilter from "../components/categoryfilter";
import { useFavorites } from "../hooks/usefavorites";
import { useFetchMovies } from "../hooks/usefetchmovies";
import Movie from "../assets/images/wallpaper.jpg"

function Homepage() {
  const { addFavorite } = useFavorites();
  const { movies, loading, error } = useFetchMovies();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  if (loading) return <p className="text-center text-white mt-10">Loading movies...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  // Filter movies by search and category
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || movie.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(movies.map((m) => m.category)));

  return (
    <>
    
    <div className="px-6 py-8 bg-black min-h-screen text-white">
      <div
  className="flex items-center justify-center h-[80vh] px-12 py-16 bg-cover bg-center rounded-lg shadow-lg"
  style={{
    backgroundImage: `url(${Movie})`,
  }}
>
  <div className="flex items-center justify-center h-full">
  <div className="max-w-xl bg-black/70 p-8 rounded-lg">
    <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4 animate-pulse">
      🎬 Welcome to{" "}
      <span className="text-pink-400 hover:text-pink-600 transition-colors duration-300">
        Movie Explorer
      </span>
      !
    </h1>

    <p className="text-gray-300 text-lg md:text-xl">
      Discover your <span className="text-yellow-300 font-semibold">next favorite</span>, 
      explore <span className="text-green-300 font-semibold">thrilling adventures</span>, 
      and never run out of stories to watch.
    </p>
  </div>
</div>

</div>


      <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center mt-6">Explore Movies</h2>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {filteredMovies.length === 0 ? (
        <p className="text-center mt-10 text-gray-400">No movies found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredMovies.map((movie) => (
            <MovieCard
  key={movie.id}
  movie={movie}
  onAddFavorite={() => addFavorite(movie)}
  isFavorite={false}
/>

          ))}
        </div>
      )}
    </div>
    </>
  );
}

export default Homepage;
