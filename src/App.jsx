import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Favorites from './pages/favorites'
import MovieDetails from './pages/moviedetails'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App