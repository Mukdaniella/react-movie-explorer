import React from 'react'

function Searchbar() {
  return (
    <>
    {/* Search Bar */}
      <div className="flex items-center bg-gray-800 rounded-md px-2 py-1">
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-gray-800 text-sm outline-none px-2 text-white placeholder-gray-400"
        />
        <button className="ml-2 bg-purple-600 px-3 py-1 rounded hover:bg-purple-700 text-sm">
          Search
        </button>
      </div>
      </>
  )
}

export default Searchbar