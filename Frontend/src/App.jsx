import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserForm from './pages/userForm';
import Login from './pages/LoginPage';
import ListFormPage from './pages/ListingFormPage';
import ListingViewPage from './pages/ListingViewPage';

import './App.css';
import UserProfile from './pages/UserProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<UserForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listform" element={<ListFormPage />} />
        <Route path="/listingview/:id" element={<ListingViewPage />} />
        <Route path="/profile" element={<UserProfile/>  } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
