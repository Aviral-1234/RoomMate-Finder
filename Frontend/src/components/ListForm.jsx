import React, { useState, useEffect } from 'react';
import AmenitiesSelector from './mini components/AmenitiesSelector';
import axios from 'axios'; // You'll need to install axios if not already done

const ListForm = () => {
  const [address, setAddress] = useState('');
  const [rent, setRent] = useState('');
  const [deposit, setDeposit] = useState('');
  const [availDate, setAvailDate] = useState('');
  const [landmark, setLandmark] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [amenities, setAmenities] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  // Handle amenities from the AmenitiesSelector component
  const handleAmenitiesChange = (selectedAmenities) => {
    setAmenities(selectedAmenities);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Create FormData object to handle file uploads
      const formData = new FormData();
      formData.append('propertyAddress', address);
      formData.append('monthlyRent', rent);
      formData.append('securityDeposit', deposit);
      formData.append('availableFrom', availDate);
      formData.append('landmark', landmark);
      formData.append('title', title);
      formData.append('description', description);
      formData.append('preferredGender', gender);
      
      // Append amenities as an array
      amenities.forEach(amenity => {
        formData.append('amenities', amenity);
      });
      
      // Append image files
      selectedImages.forEach(image => {
        formData.append('images', image);
      });

      // Send request to your backend API
      // The withCredentials option ensures cookies (for auth) are sent with the request
      const token = localStorage.getItem("token"); // or whatever key you use

      const response = await axios.post('http://localhost:3000/api/rooms/add-room', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      
      

      setSuccess(true);
      // Reset form after successful submission
      setAddress('');
      setRent('');
      setDeposit('');
      setAvailDate('');
      setLandmark('');
      setTitle('');
      setDescription('');
      setGender('');
      setSelectedImages([]);
      setAmenities([]);
      
      // Optionally redirect to the new listing
      // window.location.href = `/rooms/${response.data._id}`;
      
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create listing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='w-full flex justify-center mt-24 mb-24'>
      <div className='bg-zinc-900 w-1/2 px-5 py-10 rounded-lg'>
        <h1 className="bg-zinc-900 text-4xl mb-10">Create Your Room Listing</h1>
        
        {error && <div className="bg-red-500 text-white p-3 mb-4 rounded">{error}</div>}
        {success && <div className="bg-green-500 text-white p-3 mb-4 rounded">Room listed successfully!</div>}
        
        <form className='bg-zinc-900' onSubmit={handleSubmit}>
          <div className='mt-5 bg-zinc-900'>
            <h3 className='bg-zinc-900 text-lg mt-3'>Property Address</h3>
            <input 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" 
              placeholder='eg. svvv, indore' 
              type="text"
              required
            />
            
            <h3 className='bg-zinc-900 text-lg mt-3'>Monthly Rent</h3>
            <input 
              value={rent} 
              onChange={(e) => setRent(e.target.value)} 
              className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" 
              placeholder='enter amount in ₹' 
              type="number"
              required
            /> 

            <h3 className='bg-zinc-900 text-lg mt-3'>Mention Security Deposit</h3>
            <input 
              value={deposit} 
              onChange={(e) => setDeposit(e.target.value)} 
              className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" 
              placeholder='enter amount in ₹' 
              type="number"
              required
            /> 

            <h3 className='bg-zinc-900 text-lg mt-3'>Available from</h3>
            <input 
              value={availDate} 
              onChange={(e) => setAvailDate(e.target.value)} 
              className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" 
              type="date"
              required
            /> 

            <h3 className='bg-zinc-900 text-lg mt-3'>Add landmark</h3>
            <input 
              value={landmark} 
              onChange={(e) => setLandmark(e.target.value)} 
              className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" 
              placeholder='eg. sanidhya, shekhar stationary' 
              type="text"
            />

            <h3 className='bg-zinc-900 text-lg mt-3'>Title</h3>
            <input 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="bg-zinc-700 mt-2 w-full p-2 rounded-md outline-none" 
              placeholder='enter your title' 
              type="text"
              required
            /> 

            <h3 className='bg-zinc-900 text-lg mt-3'>Description</h3>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              className="mt-2 w-full h-[200px] bg-zinc-700 rounded-md p-2 outline-none" 
              placeholder="add your description here"
            ></textarea>

            <h3 className='bg-zinc-900 text-lg mt-3'>Choose Preferred Gender</h3>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              className="w-full p-2 rounded-md mt-2 bg-zinc-700 mb-3 outline-none"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Any">Any</option>
            </select>

            <AmenitiesSelector onAmenitiesChange={handleAmenitiesChange} />

            <div className='imageUpload p-3 bg-transparent mt-3'>
              <h3 className='bg-zinc-900 text-lg mb-2'>Upload Images</h3>
              <input
                type="file"
                accept="image/*" 
                multiple
                onChange={handleImageUpload} 
                className='p-2 bg-transparent rounded-md' 
                required
              />
          
              <div className="flex gap-2 flex-wrap mt-3">
                {selectedImages.length > 0 &&
                  selectedImages.map((img, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(img)}
                      alt={`Uploaded ${index + 1}`}
                      className="w-24 h-24 object-cover rounded-md shadow-md"
                    />
                  ))}
              </div>
            </div>
          </div>
          
          <div className="w-full flex justify-center bg-zinc-900">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-white text-black font-bold mt-10 px-10 py-3 rounded-md transition-transform hover:bg-transparent hover:text-white duration-300 hover:shadow-xl hover:scale-105 hover:border cursor-pointer"
            >
              {isSubmitting ? 'Creating...' : 'Create Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ListForm;