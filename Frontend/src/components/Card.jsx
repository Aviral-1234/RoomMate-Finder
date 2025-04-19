// Updated RoomCard Component
import React from "react";
import alexPhoto from '../assets/download.jpg'

const RoomCard = ({ room }) => {
  // Use the first image from the room's images array if available, otherwise use the default image
  const imageUrl = room && room.images && room.images.length > 0 
    ? room.images[0].url 
    : alexPhoto;

  return (
    <div className="cardbody cursor-pointer bg-zinc-800 max-w-sm rounded-2xl overflow-hidden shadow-lg border border-zinc-500 
    transition-transform duration-300 hover:shadow-xl hover:scale-105">
    {/* Room Image */}
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={imageUrl}
          alt={room.title || "Room"}
        />
        {/* New & Price Badge */}
        <div className="absolute bottom-1 left-3 bg-[#f7971d] text-black px-3 py-1 rounded-full text-sm font-semibold">
          <p className="bg-transparent font-bold text-black">₹{room.monthlyRent}</p>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-4 bg-zinc-800">
        <h2 className="text-lg font-bold bg-zinc-800">{room.propertyAddress}</h2>
        <p className="text-zinc-500 text-sm font-semibold bg-zinc-800">
          {room.title}
        </p>
        <p className="text-gray-300 text-sm mt-2 bg-zinc-800">
          {room.description}
        </p>
        <p className="text-gray-300 text-sm mt-2 bg-zinc-800">
          <span className="font-semibold bg-zinc-800">Room near:</span> {room.landmark}
        </p>
      </div>
    </div>
  );
};

export default RoomCard;