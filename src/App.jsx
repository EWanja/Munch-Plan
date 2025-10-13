import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import BrowseRecipes from './pages/BrowseRecipes'

function App() {

  return (
    <>
      <Router>
      <Navbar /> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/recipes" element={<BrowseRecipes />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
