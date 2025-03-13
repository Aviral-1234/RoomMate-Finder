import { useState } from 'react'
import FloatingCard from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/5 h-1/3">
        <FloatingCard />
      </div>
    </div>
  )
}

export default App
