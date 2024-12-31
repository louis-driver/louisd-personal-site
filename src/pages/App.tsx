import '../styles/App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Heading from '../components/Heading'
import { Link } from 'react-router-dom'

function App() {

  const heroProps = {
    h3: "This is",
    h2: "Me",
    paragraphs: [{id: 0, paragraph: "Consider it a place to share my projects and experiences with whomever happens to scroll on in."},
      {id: 1, paragraph: "Enjoy!"}],
    children: null
  }

  const wonderButtonProps = {
    h3: "An impish endeavor",
    h2: "WonderButton", 
    paragraphs: [{id: 0, paragraph: "An experience more so than a website. The button let's you know what it thinks, you just get to be along for the ride."},
      ],
    children: <Link to="/wonderbutton">Click the Button</Link>
  }

  const thisWebsiteProps = {
    h3: "A project of self-expression",
    h2: "This Website",
    paragraphs: [{id: 0, paragraph: "This website serves as a leap into the development world that I had yet to fully commit to. Feeling the need to know “everything” to design, develop, and deploy a website seemed like an overwhelming task, but challenges promote learning, I like to say. "},
      {id: 1, paragraph: "A website that talks about its own design and developement? This is some website-ception."}],
    children: <Link to="/louisd">See my process</Link>
  }

  return (
    <>
      <Navbar />  
      <HeroSection {...heroProps} />
      <Heading heading="Projects" />
      <section className="smithsonian">
        <img className='top-transition' src="/src/assets/TopTransition.svg" alt="Pixelated Transition" />
        <div className="smithsonian-content">
          <div className="smithsonian-header">
            <h2>Smithsonian</h2>
            <h3>An exploration of typography</h3>
          </div>
          <p>This project served to study typography’s importance in web design along with its capabilities for creating an interesting design without reliance on imagery.</p>
          <Link to="/smithsonian" className="smithsonian-link">Check it Out!</Link>
        </div>
        <img className='bottom-transition' src="/src/assets/BottomTransition.svg" alt="Pixelated Transition" />
      </section>
      <HeroSection {...wonderButtonProps} />
      <HeroSection {...thisWebsiteProps} />
      <Footer />
    </>
  )
}

export default App
