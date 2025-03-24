import React from 'react';
import NavBar from '../components/navBar';
import RoomCard from '../components/Card';
import HeroSection from '../components/HeroSection';


const HomePage = () => {
  return (
    <div>
         <NavBar />
         <HeroSection/>
    <div className="w-full flex justify-center">
      <div className="w-full max-w-7xl px-2 py-7">
       
        <div className="p-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;