import Footer from "../components/Footer";
import Heading from "../components/Heading";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TextSection from "../components/TextSection";

export default function WonderButton() {
    const heroProps = {
        h3: "Just some",
        h2: "lighthearted mischief",
        paragraphs: [{id: 0, paragraph: "This project is a button that, well, does things when you click it. In general, it's an opportunity to poke fun at the user. You can read about the concept and implementation below, but it's more of an experience you should participate in firsthand (some annoyance may occur)."}],
        children: <a href="https://plankton-app-kbmgw.ondigitalocean.app/" target="_blank">Click the Button</a>
    }

    const purposeProps = {
        h2: "Purpose",
        h3: "A course assignment",
        paragraphs: [
            {id: 0, paragraph: "Originally an assignment for a class, the goal was to simply gain experience with buttons in JavaScript. However, an alternative submission was proposed and completed in class one day, yet I had already began the assignment. I enjoyed the concept of a mischievous button, so I decided to expand on the original concept and make a personal project out of it."},
            {id: 1, paragraph: "The concept as a whole is a button that communicates with the user while doing various things. Some actions are informative, others provoke contemplation, a few are just for fun, and a couple cause minor irritation."}
        ]
    }

    const designProps = {
        h2: "Design",
        h3: "Simple, evolving",
        paragraphs: [
            {id: 0, paragraph: "This website is relatively simple - it consists of a marquee and a button. Given this, the space for design is present, but limited. To adapt to this constraint, I've chosen to develop and modify the styling over the course of the button being clicked."},
            {id: 1, paragraph: "Currently, the only aspect of design that the button discusses is font size and leading. I intend to add sequences for choosing a typeface, the color palette, and button styling."}
        ]
    }

    const implementationProps = {
        h2: "Implementation",
        h3: "Back to the basics",
        paragraphs: [
            {id: 0, paragraph: "HTML, CSS, and JavaScript - that's all you really need for any website. Why complicate such a simple concept with the complexities of a framework or external dependency? That's my thought process for this project at least."},
            {id: 1, paragraph: "The message sequences (or \"conversations\") of the button are stored in arrays, with each array representing some sequence of phrases the button will display to the user. These arrays are stored in a dictionary. An array of all the dictionary keys are stored to randomize the order of the sequences for a varied experience."},
            {id: 2, paragraph: "A loop iterates with each click of the button to display the next phrase. Once a message sequence is finished, the next key from the randomized array is used to get the next conversation. For the button to perform \"actions\" in association with each message sequence a corresponding function exists. Each function will update the CSS variables at certain indexes of the array to express some idea, like movement or a design principle."}
        ]
    }

    return (
        <>
        <Navbar />
        <Heading heading="WonderButton" />
        <HeroSection {...heroProps}/>
        <Heading heading="Process" />
        <TextSection {...purposeProps} />
        <TextSection {...designProps} />
        <TextSection {...implementationProps} />
        <Footer />
        </>
    )
}