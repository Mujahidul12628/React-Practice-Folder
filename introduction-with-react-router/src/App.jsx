import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/Header/Header'
import { Outlet } from 'react-router-dom'
import Main from './assets/components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main></Main>
    </div>
  )
}

export default App
