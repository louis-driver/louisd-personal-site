import { useState } from 'react'
import '../styles/App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Heading from '../components/Heading'

function App() {

  const heroProps = {
    h3: "This is",
    h2: "Me",
    paragraphs: [{id: 0, paragraph: "Consider it a place to share my projects and experiences with whomever happens to scroll on in."}, {id: 1, paragraph: "Enjoy."}]
}

  return (
    <>
      <Navbar />
      <HeroSection {...heroProps} />
      <Heading heading="Projects" />
      <Footer />
    </>
  )
}

export default App
