import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminListingsPage = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication required');
        }

        const response = await axios.get('http://localhost:3000/api/flats/get', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        // Access the data correctly based on your response structure
        setListings(response.data.data || []);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to fetch listings');
        setLoading(false);
        console.error('Error fetching listings:', err);
      }
    };

    fetchListings();
  }, []);

  const handleViewReports = (listingId) => {
    navigate(`/admin/reports/${listingId}`);
  };

  const handleDelete = async (listingId) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
      try {
        const token = localStorage.getItem('token');
        await axios.delete(`http://localhost:3000/api/flats/delete/${listingId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        // Remove the deleted listing from state
        setListings(listings.filter(listing => listing._id !== listingId));
      } catch (err) {
        console.error('Error deleting listing:', err);
        alert('Failed to delete listing');
      }
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return dateString; // Invalid date, return as is
    return date.toLocaleDateString();
  };

  if (loading) return <div className="text-center py-10">Loading listings...</div>;
  if (error) return <div className="text-center py-10 text-red-600">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard - Property Listings</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available From</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {listings.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">No listings found</td>
              </tr>
            ) : (
              listings.map((listing) => (
                <tr key={listing._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {listing.images && listing.images[0] ? (
                        <img 
                          src={listing.images[0].url} 
                          alt={listing.title} 
                          className="h-10 w-10 rounded-full object-cover mr-3"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                      )}
                      <div className="text-sm font-medium text-white">
                        {listing.title || 'Untitled Property'}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">
                      {listing.propertyAddress}
                    </div>
                    <div className="text-sm text-gray-500">{listing.landmark || 'No landmark'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-white">₹{listing.monthlyRent?.toLocaleString() || 'N/A'}</div>
                    <div className="text-sm text-gray-500">Deposit: ₹{listing.securityDeposit?.toLocaleString() || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatDate(listing.availableFrom)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleViewReports(listing._id)}
                      className="text-indigo-600 hover:text-indigo-900 mr-4"
                    >
                      View Reports
                    </button>
                    <button
                      onClick={() => handleDelete(listing._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminListingsPage;