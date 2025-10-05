import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <div className='flex items-center justify-around px-8 py-4'>
            
            <img src="src/assets/logo.png"alt="munchplan-logo"className="w-50 h-50 object-contain"/>
        
            <div className='flex space-x-8 text-gray-800 font-medium text-lg'>
            <Link to="/" className='hover:text-[#38c425] transition-colors duration-200'>Home</Link>
            <Link to="/recipes" className='hover:text-[#38c425] transition-colors duration-200'>Browse Recipes</Link>
            <Link to="/planner" className='hover:text-[#38c425] transition-colors duration-200'> Meal Planner</Link>
            </div>
            
        </div>
    )
}

export default Navbar