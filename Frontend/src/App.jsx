import { useState } from 'react'

import HomePage from './pages/HomePage'
import UserForm from './pages/userForm'
import Login from './pages/LoginPage'
import ListFormPage from './pages/ListingFormPage'

import './App.css'

function App() {
  return (
    <div className="h-screen">
      <div> 
        <ListFormPage/>
        {/* <HomePage/> */}
        {/* <UserForm/> */}
        {/* <Login/> */}
      </div>
    </div>
  )
}

export default App
