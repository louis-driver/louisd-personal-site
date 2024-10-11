import { useState } from 'react'
import '../styles/App.css'
import Navbar from '../components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1>My Personal Site</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          This is my website. 
        </p>
      </div>
    </>
  )
}

export default App
