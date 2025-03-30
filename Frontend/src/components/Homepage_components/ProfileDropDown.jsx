import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileDropdown = ({ isOpen, setIsOpen, onLogout }) => {
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
          <ul className="py-2 text-gray-800">
            <li 
              className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 group" 
              onClick={() => {
                navigate('/profile');
                setIsOpen(false);
              }}
            >
              <span className="flex items-center group-hover:bg-white group-hover:text-black transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                View Profile
              </span>
            </li>
            <li 
              className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 group" 
              onClick={() => {
                navigate('/bookmarks');
                setIsOpen(false);
              }}
            >
              <span className="flex items-center group-hover:bg-white group-hover:text-black transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                Bookmarks
              </span>
            </li>
            <li 
                  className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 group" 
                  onClick={() => {
                   navigate('/listings');
                    setIsOpen(false);
                  }}
                >
                  <span className="flex items-center bg-transparent group-hover:bg-white group-hover:text-black transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 " viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    Your Listing
                  </span>
            </li>

            <div className="border-t border-gray-200 my-1"></div>
            <li 
              className="px-4 py-2 hover:bg-white hover:text-black cursor-pointer transition-colors duration-200 text-red-600" 
              onClick={() => {
                onLogout();
                setIsOpen(false);
              }}
            >
              <span className="flex items-center bg-transparent text-red-600 hover:bg-white hover:text-red-600 transition-colors duration-200 text-black">    
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7z" clipRule="evenodd" />
                  <path d="M8.293 7.293a1 1 0 011.414 0L11 8.586V7a1 1 0 112 0v4a1 1 0 01-1 1H8a1 1 0 110-2h1.586l-1.293-1.293a1 1 0 010-1.414z" />
                </svg>
                Logout
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;