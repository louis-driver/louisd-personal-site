import '../styles/App.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Heading from '../components/Heading'
import { Link } from 'react-router-dom'
import ProjectSection from '../components/ProjectSection'

function App() {

  const heroProps = {
    h3: "This is",
    h2: "Me",
    paragraphs: [{id: 0, paragraph: "Consider it a place to share my projects and experiences with whomever happens to scroll on in."},
      {id: 1, paragraph: "Enjoy!"}],
    children: null
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

      <ProjectSection className='societys-press'>
        <article className='societys-press-card'>
          <h2 className='societys-press-card-title dynamic-title'>Society's Press: Designing a Digital Commons to Promote Critical Thought and Civil Discourse</h2>
          <div className='exterior-border'>
            <p className='societys-press-card-content'>
              For my undergraduate thesis, I designed a system for a community-moderated publication platform. The concept to to be an alternative to Medium.com and Substack. The visual inspiration comes from traditional print media and the Enlightment.
            </p>
          </div>
        </article>
      </ProjectSection>

      <ProjectSection className="smithsonian">
        <div className="smithsonian-content">
          <div className="smithsonian-header">
            <h2>Smithsonian</h2>
            <h3>An exploration of typography</h3>
          </div>
          <p>This project served to study typography’s importance in web design along with its capabilities for creating an interesting design without reliance on imagery. While only a static HTML site styled with CSS, it aided in learning how to implement wireframed design files.</p>
          <Link to="/smithsonian" className="smithsonian-link">Check it Out!</Link>
        </div>
      </ProjectSection>

      <ProjectSection className="wonderbutton">
        <div id="marqueeDiv">
          <div className="marquee enable-animation">
            <span className="marquee-content">CLICK THE BUTTON</span>
            <span className="marquee-content" aria-hidden="true">CLICK THE BUTTON</span>
          </div>
        </div>
        <div id="buttonOverlay">
            <Link to="/wonderbutton" id="wonderBtn">WonderButton</Link>
        </div>
      </ProjectSection>

      <HeroSection {...thisWebsiteProps} />
      <Footer />
    </>
  )
}

export default App
