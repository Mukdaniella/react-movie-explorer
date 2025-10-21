import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path='./' element>Home</Route> */}
      </Routes>
    </Router>
  )
}

export default App