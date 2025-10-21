import React from 'react'
import Searchbar from './searchbar'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-lg">
      {/* Logo / Title */}
      <h1 className="text-2xl font-bold text-purple-400">🎥 Movie Explorer</h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-sm font-semibold">
        <li className="hover:text-purple-400 cursor-pointer">Home</li>
      </ul>
     <Searchbar/>
      
    </nav>
  )
}

export default Navbar