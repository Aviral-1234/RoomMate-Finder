import { useState } from 'react'

import HomePage from './pages/HomePage'
import UserForm from './pages/userForm'

import './App.css'

function App() {
  return (
    <div className="h-screen">
      <div> 
      {/* <HomePage/> */}
      <UserForm/>
      </div>
    </div>
  )
}

export default App
