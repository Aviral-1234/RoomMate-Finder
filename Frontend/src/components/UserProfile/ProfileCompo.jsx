import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2, FiMail, FiPhone, FiMapPin, FiCalendar, FiUser } from 'react-icons/fi';
import alexPhoto from '../../assets/download.jpg'; // Sample image, replace with actual image path

const ProfileView = () => {
  // Sample user data (would come from API in real implementation)
  const user = {
    fullName: 'Alexandria Daddario',
    userName: 'alex_daddario',
    email: 'alex@gmail.com',
    phoneNumber: '+91 213456789',
    dob: '1986-03-16',
    profileImage: alexPhoto,
    gender: 'Female',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a convallis tellus. Maecenas sed mauris eu lorem efficitur tempus vitae blandit lectus. Etiam malesuada bibendum arcu non accumsan.',
    city: 'Hollywood',
    state: 'California',
    pincode: '90210',
    role: 'user',
    createdAt: '2023-12-05'
  };

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

  // Calculate age based on DOB
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const age = calculateAge(user.dob);
  const memberSince = new Date(user.createdAt).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long'
  });

  return (
    <div 
      ref={sectionRef}
      className="mt-32 w-full  pb-16 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute pointer-events-none transition-opacity duration-100 opacity-60 bg-[#f7971d] rounded-full blur-3xl w-64 h-64" 
        style={{ 
          left: `${mousePosition.x - 128}px`, 
          top: `${mousePosition.y - 128}px`,
          zIndex: 0
        }} 
      />
      
      {/* Top Section - Profile Header */}
      <div className="top-section relative z-10 w-screen px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-8 mb-8">
          <div className="h-48 w-48 mb-4 md:mb-0">
            <img src={user.profileImage} alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-zinc-700" />
          </div>
          
          <div className="flex flex-col items-center md:items-start ">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold">{user.fullName}</h1>
              <Link to="/edit-profile" className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition duration-300">
                <FiEdit2 className="text-xl" />
              </Link>
            </div>
            
            <p className="text-xl text-gray-300 mt-2">@{user.userName}</p>
            
            <div className="flex items-center gap-2 mt-4">
              <span className="px-3 py-1 bg-zinc-800 rounded-full">{user.gender}</span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full">{age} years</span>
              <span className="px-3 py-1 bg-zinc-800 rounded-full">{user.city}</span>
            </div>
            
            <div className="mt-6 flex gap-4">
              <Link to="/my-listings" className="bg-[#2a9d8f] hover:bg-[#238b7f] text-white px-6 py-2 rounded-md transition duration-300">
                My Listings
              </Link>

              <Link to="/favorites" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-md transition duration-300">
                Favorites
              </Link>
            </div>
          </div>
        </div>
        
        <hr className="border-zinc-700" />
      </div>
      
      {/* User Details Section */}
      <div className="details-section mt-8 relative z-10 bg-transparent px-10">
        <div className="grid md:grid-cols-2 gap-8 bg-transparent">
          {/* Left Column - Bio and Info */}
          <div className='bg-transparent'>
            <div className="bg-zinc-800 rounded-xl p-6 mb-6 bg-transparent">
              <h2 className="text-2xl font-bold mb-4 bg-transparent">About Me</h2>
              <p className="text-lg bg-transparent">{user.bio}</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 bg-transparent">Member Info</h2>
              <div className="space-y-4 bg-transparent">
                <div className="flex items-center gap-3 bg-transparent">
                  <FiCalendar className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Member Since</p>
                    <p className="text-lg bg-transparent">{memberSince}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-transparent">
                  <FiUser className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">User Type</p>
                    <p className="text-lg capitalize bg-transparent">{user.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact & Location */}
          <div className='bg-transparent'>
            <div className="bg-zinc-800 rounded-xl p-6 mb-6 bg-transparent">
              <div className="flex justify-between items-center mb-4 bg-transparent">
                <h2 className="text-2xl font-bold bg-transparent">Contact Information</h2>
                <Link to="/edit-profile" className="text-[#f7971d] hover:text-[#e58a15] transition duration-300 bg-transparent">
                  Edit
                </Link>
              </div>
              
              <div className="space-y-4 bg-transparent">
                <div className="flex items-center gap-3 bg-transparent">
                  <FiMail className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Email</p>
                    <p className="text-lg bg-transparent">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-transparent">
                  <FiPhone className="text-xl text-gray-400 bg-transparent" />
                  <div className="bg-transparent">
                    <p className="text-gray-400 bg-transparent">Phone</p>
                    <p className="text-lg bg-transparent">{user.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4 bg-transparent">
                <h2 className="text-2xl font-bold bg-transparent">Location</h2>
                <Link to="/edit-profile" className="text-[#f7971d] hover:text-[#e58a15] transition duration-300 bg-transparent">
                  Edit
                </Link>
              </div>
              
              <div className="flex items-center gap-3 bg-transparent">
                <FiMapPin className="text-xl text-gray-400 bg-transparent" />
                <div className="bg-transparent">
                  <p className="text-gray-400 bg-transparent">Address</p>
                  <p className="text-lg bg-transparent">
                    {user.city}, {user.state} - {user.pincode}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Account Settings Section */}
      <div className="settings-section mt-8 relative z-10 bg-transparent px-10">
        <div className="bg-zinc-800 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 bg-transparent">Account Settings</h2>
          
          <div className="flex flex-wrap gap-4 bg-transparent">
            <Link to="/change-password" className="bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-md transition duration-300">
              Change Password
            </Link>
            <Link to="/privacy-settings" className="bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-md transition duration-300">
              Privacy Settings
            </Link>
            <Link to="/notification-preferences" className="bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-md transition duration-300">
              Notification Preferences
            </Link>
            <button className="bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded-md transition duration-300">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;