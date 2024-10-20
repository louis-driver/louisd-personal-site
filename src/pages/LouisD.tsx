import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import HeroSection from '../components/HeroSection';
import TextSection from '../components/TextSection';

function LouisD() {
    const heroProps = {
        h3: "A project of self-expression",
        h2: "This Website",
        paragraphs: [{id: 0, paragraph: "Heyo! It's Louis. Yes, I designed and developed this website by myself. Yes, I know it's so very super stinkin' awesome. Also yes, you should totally reach out to me!"},
          {id: 1, paragraph: "Pretty cool right?"}],
        children: null
    }

    const purposeProps = {
        h2: "Purpose",
        h3: "A project of self-expression",
        paragraphs: [{id: 0, paragraph: "As I aspire to be a full stack web developer, I couldn't even begin to call myself one without a portfolio website! So yeah, that's one of the main reasons for creating this website."},
            {id: 1, paragraph: "Besides displaying my capabilities in a concrete fashion that is visible to everyone."},
            {id: 2, paragraph: "Oh, and as a method to gain more web development experience."},
            {id: 3, paragraph: "And for the fun of making you read this."}
        ]
    }

    const designProps = {
        h2: "Design",
        h3: "Sleek and unobtrusive",
        paragraphs: [{id: 0, paragraph: "When designing this site, as always I had to consider what role this website would assume. Namely, it's a portfolio for my various other projects. Given that my projects have different stylist choices, I needed to design a user interface that could highlight those designs while also exuding a style of its own."},
            {id: 2, paragraph: "Thus, I opted for an achromatic color scheme that wouldn't conflict with the palettes of my other work. Additionally, I sought a modern and modular feel, so I opted for a clean, sans-serif font. As for the layout, I've chosen to use white-space to my advantage, while letting the user's imagination create \"invisible\" margins with my alignment."}
        ]
    }

    const developmentProps = {
        h2: "Development",
        h3: "Simple and modern",
        paragraphs: [{id: 0, paragraph: "With React's prevalence in the industry, as well as it being taught in my courses, I opted to use it as my front-end framework. React\'s modular development also let\'s me quickly construct new process pages for any new projects I create. You know, after I had built those components at least."},
            {id: 1, paragraph: "To deploy the website, I've used a DigitalOcean droplet because of their ease of use for web developers and the low start-up cost. An extra plus is the continuous integration and delivery through its link to my github repository. Plus, it should let me host multiple low-traffic sites on one droplet."}
        ]
    }

    return (
        <>
        <Navbar />
        <Heading heading="LouisD" />
        <HeroSection {...heroProps}/>
        <Heading heading="Process" />
        <TextSection {...purposeProps} />
        <TextSection {...designProps} />
        <TextSection {...developmentProps} />
        <Footer />
        </>
    )
}

export default LouisD;