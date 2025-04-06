import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TreeView from './component/TreeView'
import menus from './component/data'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <TreeView menus={menus}/>
   </>
  )
}

export default App
