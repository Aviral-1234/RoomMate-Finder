// Updated HomePage Component
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import NavBar from '../components/navBar';
import RoomCard from '../components/Card';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/flats/get');
        if (response.data.success) {
          setRooms(response.data.data);
        } else {
          setError('Failed to fetch rooms');
        }
      } catch (err) {
        setError('Error connecting to server');
        console.error('Error fetching rooms:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl px-2 py-7">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-xl">Loading rooms...</p>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-red-500 text-xl">{error}</p>
            </div>
          ) : (
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {rooms.length > 0 ? (
                rooms.map((room) => (
                  <Link key={room._id} to={`/listingview/${room._id}`}>
                    <RoomCard room={room} />
                  </Link>
                ))
              ) : (
                <div className="col-span-3 text-center py-10">
                  <p className="text-xl">No rooms available</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;