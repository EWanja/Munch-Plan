import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div>
            <img src='src/assets/logo.png' alt='munchplan-logo' className='' />
            <Link to="/home">Home</Link>
            <Link to="/recipes">Browse Recipes</Link>
            <Link to="/planner"> Meal Planner</Link>

        </div>
    )
}

export default Navbar