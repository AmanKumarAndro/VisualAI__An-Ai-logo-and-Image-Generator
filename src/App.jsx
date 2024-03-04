import { useState } from 'react'

import './App.css'
import Generator from './components/Generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Generator/>
    </>
  )
}

export default App
