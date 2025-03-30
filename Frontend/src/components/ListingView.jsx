import React, { useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FiHome, FiMap, FiDollarSign, FiCalendar, FiUsers, FiMail, FiPhone, FiList } from 'react-icons/fi'
import alexPhoto from '../assets/download.jpg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const ListingView = () => {
  const roomImages = [
    'https://images.unsplash.com/photo-1615571022219-1254f8cd1e9c',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45',
    'https://images.unsplash.com/photo-1582719478250',
    'https://images.unsplash.com/photo-1556020685-ae341caa49d9'
  ]

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
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
            <img src={alexPhoto} alt="profile photo" className="w-full h-full rounded-full object-cover border-4 border-zinc-700"/>
          </div>
          
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">Alexandria Daddario</h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="px-3 py-1 bg-zinc-800 rounded-full">female</span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full">26 years</span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full">Hollywood</span>
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
                    <p className="text-lg bg-transparent">5000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiDollarSign className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Security Deposit</p>
                    <p className="text-lg bg-transparent">15000</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiCalendar className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Available from</p>
                    <p className="text-lg bg-transparent">12-12-2025</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiUsers className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Preferred Gender</p>
                    <p className="text-lg bg-transparent">Female / Male if its Aviral</p>
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
                    <p className="text-lg bg-transparent">alex@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiPhone className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Phone</p>
                    <p className="text-lg bg-transparent">+91 213456789</p>
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
                    <p className="text-lg bg-transparent">Top Moholla ujjain</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-transparent">
                  <FiMap className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Landmark</p>
                    <p className="text-lg bg-transparent">near anda gully</p>
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
                    Wi-Fi · 
                    Air Conditioning · 
                    Washing Machine · 
                    Parking · 
                    Security · 
                    Power Backup · 
                    Water Supply 24/7
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
          <p className="text-lg bg-transparent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a convallis tellus. Maecenas sed mauris eu lorem efficitur tempus vitae blandit lectus. Etiam malesuada bibendum arcu non accumsan. Quisque euismod finibus porta. Aenean at velit eu arcu tincidunt feugiat. Fusce id dictum purus. Proin et nibh semper urna gravida fermentum.
          </p>
        </div>
      </div>
      
      {/* Images Section */}
      <div className="images-section mt-8 relative z-10 bg-transparent px-10">
        <div className="bg-zinc-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 bg-transparent">Property Images</h2>
          
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
            {roomImages.map((image, index) => (
              <SwiperSlide key={index} className="bg-transparent">
                <div className="flex justify-center bg-transparent">
                  <img 
                    src={image} 
                    alt={`Room view ${index + 1}`} 
                    className="max-h-[500px] w-full object-cover rounded-xl bg-transparent"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ListingView