import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import roomie from '../assets/home-roomie.svg'
import homie from '../assets/home-homie.svg'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleClick = () => {
    window.scrollTo({ top: 350, behavior: "smooth" });
  }

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      // console.log(mousePosition.x, mousePosition.y);
    }
  }

  return (
    <div 
      ref={sectionRef}
      className="pt-[90px] w-full bg-black py-12 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute pointer-events-none transition-opacity duration-100 opacity-40 bg-[#f7971d] rounded-full blur-[80px] w-96 h-96" 
        style={{ 
          left: `${mousePosition.x - 192}px`, 
          top: `${mousePosition.y - 192}px`,
          zIndex: 0
        }}
      />
      
      <div className="bg-transparent w-full max-w-7xl mx-auto  px-4 text-center text-white relative z-10">
        <h1 className="bg-transparent text-white text-4xl font-bold mb-3">Find your Room Mate Now</h1>
        <p className="bg-transparent text-xl mb-8">list, search & communicate</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 bg-transparent">
         {/* Need a roommate card */}

<div className="bg-zinc-700 text-white rounded-lg p-6 flex items-center justify-between relative shadow-lg">
  <div className='bg-zinc-700'>
    <h2 className="bg-zinc-700 text-xl font-semibold text-white mb-4">Need a roommate?</h2>
    <Link to={'/listform'}>
    <button className="bg-[#2a9d8f] text-white px-4 py-2 rounded-md flex items-center transition-transform duration-300 hover:scale-105">
      List your room 
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
    </Link>
  </div>
  {/* <div className="bg-zinc-700 w-24 h-24">
    <img src={roomie} alt="Person illustration" className="bg-zinc-700 w-full h-full object-contain" />
  </div>
   */}
  <div className="bg-zinc-700 w-24 h-24">
  </div>
  <div className='w-30 h-40 absolute ml-44 bg-transparent group'>
<img src={roomie} alt="Person illustration" className="bg-transparent w-full h-full object-contain transition-transform duration-300 group-hover:-translate-y-2" />
</div>
</div>

{/* Looking for a place card */}
<div className="bg-zinc-700 rounded-lg p-6 flex items-center justify-between relative shadow-lg">
  <div className='bg-zinc-700'>
    <h2 className="text-xl font-semibold text-white bg-zinc-700 mb-4">Looking for a place?</h2>

    <button onClick={handleClick} className="bg-[#f7971d] text-white px-4 py-2 rounded-md flex items-center transition-transform duration-300 hover:scale-105">
      View listed rooms
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>

  </div>
  <div className="w-24 h-24 bg-zinc-700">
  </div>
  <div className="w-30 h-40 absolute ml-44 bg-transparent group">
  <img src={homie} alt="House illustration" className="bg-transparent w-full h-full object-contain transition-transform duration-300 group-hover:-translate-y-2" />
  </div>
  
</div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;