import React from 'react'
import Navbar from '../components/Navbar'

function Home() {

    return (
        <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-8 bg-gradient-to-r from-green-50 to-white'>
            <div className='text-center md:text-left md:w-lg space-y-6 mt-6 md:mt-0'>
                <h1 className='text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight'>Plan your meals <span className=" block text-[#278a1a] mt-2">stress-free</span>
    </h1>
                <p className='text-gray-600 text-lg'>Discover recipes & create your weekly meal plan in minutes.</p>
                <button className='bg-[#278a1a] hover:bg-[#38c425] text-white font-semibold px-6 py-3 rounded-md transition duration-300'>Get Started</button>
            </div>
            
            
            <div className=' flex justify-center md:w-1/2 mt-6 md:mt-0'>
                <img src='src/assets/hero-image.png' alt ='hero-img' className='w-80 md:w-[650px] h-auto object-containcontain drop-shadow-lg' />
            </div>
        </div>
    )
}

export default Home