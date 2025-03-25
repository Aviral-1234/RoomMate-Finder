import React, { useState } from "react";

const amenitiesList = [
  "Wi-Fi",
  "Air Conditioning",
  "Washing Machine",
  "Parking",
  "Security",
  "Power Backup",
  "Water Supply 24/7"
];

const AmenitiesSelector = () => {
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleCheckboxChange = (amenity) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((item) => item !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="p-4 bg-zinc-800 text-white rounded-lg shadow-md mt-3">
      <h2 className="text-lg font-bold mb-3 bg-transparent">Select Amenities</h2>
      <div className="grid grid-cols-2 gap-2 bg-zinc-800">
        {amenitiesList.map((amenity) => (
          <label key={amenity} className="bg-zinc-800 flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedAmenities.includes(amenity)}
              onChange={() => handleCheckboxChange(amenity)}
              className="accent-yellow-500 bg-zinc-800"
            />
            <span className="bg-transparent">{amenity}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesSelector;
