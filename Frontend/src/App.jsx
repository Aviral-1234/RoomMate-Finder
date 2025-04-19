import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserForm from './pages/userForm';
import Login from './pages/LoginPage';
import ListFormPage from './pages/ListingFormPage';
import ListingViewPage from './pages/ListingViewPage';
import UserProfile from './pages/UserProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/register" element={<UserForm />} />
        <Route path="/login" element={<Login />} />

        {/* Protected routes - only accessible when logged in */}
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        
        <Route path="/listform" element={
          <ProtectedRoute>
            <ListFormPage />
          </ProtectedRoute>
        } />
        
        <Route path="/listingview/:id" element={
          <ProtectedRoute>
            <ListingViewPage />
          </ProtectedRoute>
        } />
        
        <Route path="/profile" element={
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        } />

        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;