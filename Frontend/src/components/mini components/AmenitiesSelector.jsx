import React, { useState, useEffect } from 'react';

const AmenitiesSelector = ({ onAmenitiesChange }) => {
  const amenitiesList = [
    'Wi-Fi', 'AC', 'Washing Machine', 'Refrigerator', 'TV', 
    'Parking', 'Kitchen', 'Geyser', 'Power Backup', 'Lift',
    'Security', 'CCTV', 'Furniture'
  ];

  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleAmenityChange = (amenity) => {
    if (selectedAmenities.includes(amenity)) {
      setSelectedAmenities(selectedAmenities.filter(item => item !== amenity));
    } else {
      setSelectedAmenities([...selectedAmenities, amenity]);
    }
  };

  useEffect(() => {
    // Pass selected amenities back to parent component
    if (onAmenitiesChange) {
      onAmenitiesChange(selectedAmenities);
    }
  }, [selectedAmenities, onAmenitiesChange]);

  return (
    <div>
      <h3 className='bg-zinc-900 text-lg mt-5 mb-3'>Amenities</h3>
      <div className='flex flex-wrap gap-3'>
        {amenitiesList.map((amenity) => (
          <div key={amenity} className='flex items-center'>
            <input
              type="checkbox"
              id={amenity}
              checked={selectedAmenities.includes(amenity)}
              onChange={() => handleAmenityChange(amenity)}
              className="mr-2"
            />
            <label htmlFor={amenity}>{amenity}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesSelector;