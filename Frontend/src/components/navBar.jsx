import React from 'react'
import { Link } from 'react-router-dom'

import logo from "../assets/Rom.png"

const navBar = () => {
  return (
    <div className='w-full bg-black'>
      <nav className='fixed top-0 left-0 w-full bg-black shadow-2xl p-5 flex justify-between items-center z-50'>
      <Link className='bg-black' to={'/'}>
      <img 
  className='h-[40px] bg-black rounded-md mt-2 transition-transform transition-shadow duration-500 
             hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(253,224,71,0.6)] cursor-pointer' 
  src={logo} 
  alt="roomMate finder" 
/>
      </Link>
        <input className='absolute ml-[24%] justify-center w-1/2 outline-none rounded-md p-2 bg-zinc-800 text-white' type="text" placeholder='start your search'/>
      <Link to={'/login'}>  <button className='bg-[#f7971d] font-bold text-white p-3 rounded-md transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#a36618]'>Login</button></Link>
      </nav>
    </div>
  )
}

export default navBar
