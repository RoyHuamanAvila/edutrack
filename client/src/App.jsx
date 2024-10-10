import { useState } from 'react'
import MyRoutes from './routes/routes';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyRoutes />
    </>
  )
}

export default App
