import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className='text-7xl text-emerald-500'>React Tailwind</h1>
      <Navbar></Navbar>
    </div>
  )
}

export default App
