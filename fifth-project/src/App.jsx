import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoadMoreButton from './components/LoadMoreButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoadMoreButton/>
    </>
  )
}

export default App
