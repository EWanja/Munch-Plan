import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import BrowseRecipes from './pages/BrowseRecipes'
import RecipeDetails from './components/RecipeDetails'
import MealPlanner from './pages/MealPlanner'

function App() {

  return (
    <>
      <Router>
      <Navbar /> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<BrowseRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/planner" element={<MealPlanner />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
