import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScroolIndicator from './Components/ScroolIndicator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScroolIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </>
  )
}

export default App
