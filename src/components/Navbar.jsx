import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white">
            
          <div className='flex items-center space-x-2'>
                <img src="src/assets/logo.png" alt="munchplan-logo" className="w-50 h-50 object-contain" />
            </div>

            <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>☰</button>
            
            <div className={`${
          isOpen ? "flex" : "hidden"
                } flex-col md:flex md:flex-row md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto
         bg-white md:bg-transparent items-center md:items-center space-y-4 md:space-y-0 py-4 md:py-0
         shadow-md md:shadow-none`}>
                
            <Link to="/" className='hover:text-[#38c425] transition-colors duration-200' onClick={() => setIsOpen(false)}> Home</Link>
            <Link to="/recipes" className='hover:text-[#38c425] transition-colors duration-200' onClick={() => setIsOpen(false)}>Browse Recipes</Link>
            <Link to="/planner" className='hover:text-[#38c425] transition-colors duration-200' onClick={() => setIsOpen(false)}> Meal Planner</Link>
            </div>  
        </nav>
        
    )
}

export default Navbar