import { useState } from 'react'
import '../styles/App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

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
      <Footer />
    </>
  )
}

export default App
