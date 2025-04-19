import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import ProfileDropdown from './Homepage_components/ProfileDropDown'
import logo from "../assets/Rom.png"

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.profile-dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    navigate('/login');
  };

  return (
    <div className='w-full bg-black'>
      <nav className='fixed top-0 left-0 w-full bg-black shadow-2xl p-5 flex justify-between items-center z-50'>
        <Link className='bg-black' to={'/'}>
          <img 
            className='h-[40px] bg-black rounded-md mt-2 transition-transform transition-shadow duration-500 
                      hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(247,151,29,0.6)] cursor-pointer' 
            src={logo} 
            alt="roomMate finder" 
          />
        </Link>
        
        <input className='absolute ml-[24%] justify-center w-1/2 outline-none rounded-md p-2 bg-zinc-800 text-white' type="text" placeholder='start your search'/>

        {isLoggedIn ? (
          <div className="relative profile-dropdown-container bg-transparent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f7971d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className='bg-transparent text-white cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-xl'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            
            <ProfileDropdown 
              isOpen={isDropdownOpen} 
              setIsOpen={setIsDropdownOpen} 
              onLogout={handleLogout} 
            />
          </div>
        ) : (
          <Link to={'/login'}>
            <button className='bg-[#f7971d] font-bold text-white p-3 rounded-md transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:bg-[#a36618]'>Login</button>
          </Link>
        )}
      </nav>
    </div>
  )
}

export default NavBar