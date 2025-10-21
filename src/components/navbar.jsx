import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="bg-slate-900 text-cyan-400 px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">🎬 Movie Explorer</h1>
      <div className="space-x-6 text-sm font-semibold flex">
        <Link to="/" className="px-6 py-2 bg-cyan-500 text-cyan-100 rounded hover:text-cyan-800">Home</Link>
        <Link to="/favorites" className="px-6 py-2 bg-cyan-500 text-cyan-100 rounded hover:text-cyan-800">Favorites</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
