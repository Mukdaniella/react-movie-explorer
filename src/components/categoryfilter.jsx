import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mb-4 px-2">
      <button
        className={`px-3 py-1 rounded text-sm sm:text-base transition-all duration-200 ${
          selectedCategory === "All"
            ? "bg-cyan-600 text-white"
            : "bg-gray-800 text-cyan-400 hover:bg-gray-700"
        }`}
        onClick={() => setSelectedCategory("All")}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          className={`px-3 py-1 rounded text-sm sm:text-base transition-all duration-200 ${
            selectedCategory === cat
              ? "bg-cyan-600 text-white"
              : "bg-gray-800 text-cyan-400 hover:bg-gray-700"
          }`}
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
