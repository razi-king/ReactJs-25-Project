import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LightDarkMode from './components/LightDarkMode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LightDarkMode/>
  )
}

export default App
