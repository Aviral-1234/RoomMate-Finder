import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FiHome, FiMap, FiDollarSign, FiCalendar, FiUsers, FiMail, FiPhone, FiList } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import alexPhoto from '../assets/download.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ListingView = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Fetch room data
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        // You might need to adjust the endpoint based on your API structure
        const response = await axios.get(`http://localhost:3000/api/flats/get/${id}`);
        if (response.data.success) {
          setRoom(response.data.data);
        } else {
          setError('Failed to fetch room details');
        }
      } catch (err) {
        setError('Error connecting to server');
        console.error('Error fetching room details:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRoomData();
    }
  }, [id]);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  if (loading) {
    return (
      <div className="mt-32 flex justify-center items-center h-64">
        <p className="text-xl">Loading room details...</p>
      </div>
    );
  }

  if (error || !room) {
    return (
      <div className="mt-32 flex justify-center items-center h-64">
        <p className="text-red-500 text-xl">{error || "Room not found"}</p>
      </div>
    );
  }

  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  return (
    <div 
      ref={sectionRef}
      className="mt-32 w-full pb-16 relative overflow-hidden"
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
      
      {/* Top Section - Profile Header */}
      <div className="top-section relative z-10 w-screen px-10">
        <div className="flex flex-col items-center mb-8">
          <div className="h-48 w-48 mb-4">
            <img 
              src={room.images && room.images.length > 0 ? room.images[0].url : alexPhoto} 
              alt="property profile" 
              className="w-full h-full rounded-full object-cover border-4 border-zinc-700"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">{room.title}</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-3 py-1 bg-zinc-800 rounded-full">{room.preferredGender}</span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full">Available from {formatDate(room.availableFrom)}</span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full">{room.propertyAddress}</span>
            </div>
          </div>
        </div>
        
        <hr className="border-zinc-700" />
      </div>
      
      {/* Property Details Section */}
      <div className="details-section mt-8 relative z-10 bg-transparent px-10">
        <div className="grid md:grid-cols-2 gap-8 bg-transparent">
          {/* Left Column - Rental Info */}
          <div className="bg-transparent">
            <div className="bg-zinc-800 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 bg-transparent">Rental Information</h2>
              
              <div className="space-y-4 bg-transparent">
                <div className="flex items-center gap-3 bg-transparent">
                  <FiDollarSign className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Rent</p>
                    <p className="text-lg bg-transparent">₹{room.monthlyRent}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiDollarSign className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Security Deposit</p>
                    <p className="text-lg bg-transparent">₹{room.securityDeposit}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiCalendar className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Available from</p>
                    <p className="text-lg bg-transparent">{formatDate(room.availableFrom)}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiUsers className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Preferred Gender</p>
                    <p className="text-lg bg-transparent">{room.preferredGender}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 bg-transparent">Contact Information</h2>
              
              <div className="space-y-4 bg-transparent">
                <div className="flex items-center gap-3 bg-transparent">
                  <FiMail className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Email</p>
                    <p className="text-lg bg-transparent">contact@roommate.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiPhone className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Phone</p>
                    <p className="text-lg bg-transparent">+91 9876543210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Location & Amenities */}
          <div className="bg-transparent">
            <div className="bg-zinc-800 rounded-xl p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 bg-transparent">Location</h2>
              
              <div className="space-y-4 bg-transparent">
                <div className="flex items-center gap-3 bg-transparent">
                  <FiHome className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Address</p>
                    <p className="text-lg bg-transparent">{room.propertyAddress}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiMap className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Landmark</p>
                    <p className="text-lg bg-transparent">{room.landmark}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 bg-transparent">Amenities</h2>
              
              <div className="flex items-center gap-3 bg-transparent">
                <FiList className="text-xl text-gray-400 bg-transparent" />
                <div className="bg-transparent">
                  <p className="text-lg bg-transparent">
                    {room.amenities && room.amenities.join(' · ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Description Section */}
      <div className="description-section mt-8 relative z-10 bg-transparent px-10">
        <div className="bg-zinc-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 bg-transparent">Description</h2>
          <p className="text-lg bg-transparent">{room.description}</p>
        </div>
      </div>
      
      {/* Images Section */}
      <div className="images-section mt-8 relative z-10 bg-transparent px-10">
        <div className="bg-zinc-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 bg-transparent">Property Images</h2>
          
          {room.images && room.images.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ 
                delay: 3000,
                disableOnInteraction: false 
              }}
              className="bg-transparent"
            >
              {room.images.map((image, index) => (
                <SwiperSlide key={index} className="bg-transparent">
                  <div className="flex justify-center bg-transparent">
                    <img 
                      src={image.url} 
                      alt={`Room view ${index + 1}`} 
                      className="max-h-[500px] w-full object-cover rounded-xl bg-transparent"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-400">No images available</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ListingView