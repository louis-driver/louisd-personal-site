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
    paragraphs: [{id: 0, paragraph: "Consider it a place to share my projects and experiences with whomever happens to scroll on in."},
      {id: 1, paragraph: "Enjoy!"}],
    link: null
  }

  const sectionProps = {
    h3: "A project of self-expression",
    h2: "This Website",
    paragraphs: [{id: 0, paragraph: "This website serves as a leap into the development world that I had yet to fully commit to. Feeling the need to know “everything” to design, develop, and deploy a website seemed like an overwhelming task, but challenges promote learning, I like to say. "},
      {id: 1, paragraph: "Now this is some website-ception!"}],
    link: {hasLink: true, linkText: "See my process", linkRoute: "/louisd"}
  }

  return (
    <>
      <Navbar />
      <HeroSection {...heroProps} />
      <Heading heading="Projects" />
      <HeroSection {...sectionProps} />
      <Footer />
    </>
  )
}

export default App
