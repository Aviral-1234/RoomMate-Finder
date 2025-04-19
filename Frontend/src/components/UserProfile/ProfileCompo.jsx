import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2, FiMail, FiPhone, FiMapPin, FiCalendar, FiUser } from 'react-icons/fi';
import defaultProfileImage from '../../assets/default-profile.jpg'; // Fallback image

const ProfileView = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fetch user data from API
    const fetchUserData = async () => {
      try {
        setLoading(true);
        
        // Get token from localStorage
        const token = localStorage.getItem('token');
        
        if (!token) {
          throw new Error('Authentication token not found');
        }
        
        // Make API request with token in Authorization header
        const response = await fetch('http://localhost:3000/api/auth/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`  // Include token in Authorization header
          }
        });
        // console.log("Profile data:",await response.json());

        if (!response.ok) {
          throw new Error('Failed to fetch profile data');
        }
        
        const responseData = await response.json();
        console.log(responseData)
        // Check if the response contains a data property
        if (responseData.success && responseData.data) {
          setUser(responseData.data);
        } else if (responseData.success && responseData.user) {
          setUser(responseData.user);
        } else {
          // Directly use the response data if it doesn't have a nested structure
          setUser(responseData);
        }
        
        console.log('User data received:', responseData);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching user data:', err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchUserData();
  }, []);

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
    if (!dob) return null;
    
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  const formatMemberSince = (createdAt) => {
    if (!createdAt) return 'N/A';
    
    return new Date(createdAt).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long'
    });
  };

  if (loading) {
    return (
      <div className="mt-32 w-full flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#f7971d]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-32 w-full flex justify-center items-center h-64">
        <div className="bg-red-500 text-white p-4 rounded-md">
          <p>Error loading profile: {error}</p>
          <button 
            className="mt-2 bg-white text-red-500 px-4 py-1 rounded"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="mt-32 w-full flex justify-center items-center h-64">
        <p>No user data available.</p>
      </div>
    );
  }

  const age = calculateAge(user.dob);
  const memberSince = formatMemberSince(user.createdAt);

  return (
    <div 
      ref={sectionRef}
      className="mt-32 w-full pb-16 relative overflow-hidden"
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
            <img 
              src={user.profileImage || defaultProfileImage} 
              alt="Profile" 
              className="w-full h-full rounded-full object-cover border-4 border-zinc-700"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfileImage;
              }}
            />
          </div>
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold">{user.fullName}</h1>
              <Link to="/edit-profile" className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-full transition duration-300">
                <FiEdit2 className="text-xl" />
              </Link>
            </div>
            
            <p className="text-xl text-gray-300 mt-2">@{user.userName || 'username'}</p>
            
            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {user.gender && (
                <span className="px-3 py-1 bg-zinc-800 rounded-full">{user.gender}</span>
              )}
              {age && (
                <span className="px-3 py-1 bg-zinc-800 rounded-full">{age} years</span>
              )}
              {user.city && (
                <span className="px-3 py-1 bg-zinc-800 rounded-full">{user.city}</span>
              )}
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
          <div className="bg-transparent">
            <div className="bg-zinc-800 rounded-xl p-6 mb-6 bg-transparent">
              <h2 className="text-2xl font-bold mb-4 bg-transparent">About Me</h2>
              <p className="text-lg bg-transparent">{user.bio || 'No bio information available.'}</p>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 bg-transparent">Member Info</h2>
              <div className="space-y-4 bg-transparent">
                <div className="flex items-center gap-3 bg-transparent">
                  <FiCalendar className="text-xl text-gray-400" />
                  <div className='bg-transparent'>
                    <p className="text-gray-400 bg-transparent">Member Since</p>
                    <p className="text-lg bg-transparent">{memberSince}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-transparent">
                  <FiUser className="text-xl text-gray-400 bg-transparent" />
                  <div className='bg-transparent'>
                    <p className="text-gray-400 bg-transparent">User Type</p>
                    <p className="text-lg capitalize bg-transparent">{user.role || 'User'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact & Location */}
          <div className="bg-transparent">
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
                  <div className='bg-transparent'>
                    <p className="text-gray-400 bg-transparent">Email</p>
                    <p className="text-lg bg-transparent">{user.email || 'No email provided'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-transparent">
                  <FiPhone className="text-xl text-gray-400 bg-transparent" />
                  <div className='bg-transparent'>
                    <p className="text-gray-400 bg-transparent">Phone</p>
                    <p className="text-lg bg-transparent">{user.phoneNumber || 'No phone number provided'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-800 rounded-xl p-6 bg-transparent">
              <div className="flex justify-between items-center mb-4 bg-transparent">
                <h2 className="text-2xl font-bold bg-transparent">Location</h2>
                <Link to="/edit-profile" className="bg-transparent text-[#f7971d] hover:text-[#e58a15] transition duration-300">
                  Edit
                </Link>
              </div>
              
              <div className="flex items-center gap-3 bg-transparent">
                <FiMapPin className="text-xl text-gray-400 bg-transparent" />
                <div calssName='bg-transparent'>
                  <p className="text-gray-400 bg-zinc-800">Address</p>
                  <p className="text-lg bg-zinc-800">
                    {user.city ? `${user.city}, ` : ''}
                    {user.state ? `${user.state}` : ''}
                    {user.pincode ? ` - ${user.pincode}` : ''}
                    {!user.city && !user.state && !user.pincode && 'No address provided'}
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
            <button 
              className="bg-red-700 hover:bg-red-600 text-white px-5 py-2 rounded-md transition duration-300"
              onClick={() => {
                if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                  // Call delete account API
                  console.log('Delete account action triggered');
                }
              }}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;