import React from "react";
import alexPhoto from '../assets/download.jpg'

const RoomCard = () => {
  return (
    <div className="cardbody bg-zinc-800 max-w-sm rounded-2xl overflow-hidden shadow-lg border border-zinc-500 
    transition-transform duration-300 hover:shadow-xl hover:scale-105">
    {/* Room Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={alexPhoto} // Replace with actual image URL
          alt="Room"
        />
        {/* New & Price Badge */}
        <div className="absolute bottom-1 left-3 bg-[#f7971d] text-black px-3 py-1 rounded-full text-sm font-semibold">
          <p className="bg-transparent font-bold text-black">₹5,000</p>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-4 bg-zinc-800">
        <h2 className="text-lg font-bold bg-zinc-800">Rajouri Garden, Delhi</h2>
        <p className="text-zinc-500 text-sm font-semibold bg-zinc-800">
          Shared unfurnished room in an apartment
        </p>
        <p className="text-gray-300 text-sm mt-2 bg-zinc-800">
          1 bedroom, 1 bathroom, 1 balcony and 1 modular kitchen, with 2 big almirah.
        </p>
        <p className="text-gray-300 text-sm mt-2 bg-zinc-800">
          <span className="font-semibold bg-zinc-800">Room near:</span> Tagore Garden Extension, New Delhi, Delhi...
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
