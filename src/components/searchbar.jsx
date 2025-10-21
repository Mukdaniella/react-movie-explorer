import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center w-full px-4 mb-4">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-4 py-2 rounded border border-gray-700 bg-black text-white 
                   focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
      />
    </div>
  );
}

export default SearchBar;
