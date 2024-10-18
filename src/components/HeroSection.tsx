import { Link } from "react-router-dom";
import "../styles/HeroSection.css";

{/* Define prop types for typescript */}
interface HeroSectionProps {
    h3: string;
    h2: string;
    paragraphs: Paragraph[];
    link: Link | null;
}

interface Paragraph {
    id: number;
    paragraph: string;
}

interface Link {
    hasLink: boolean;
    linkText: string;
    linkRoute: string;
}

function HeroSection({ h3, h2, paragraphs, link }: HeroSectionProps) {
    return (
        <section className="hero-section" >
            <header className="hero-header">
                <h3>{h3}</h3> {/* Display h3 prop in component */}
                <h2>{h2}</h2> {/* Display h2 prop in component */}
            </header>
            {paragraphs.map(({id, paragraph}) => <p key={id}>{paragraph}</p>)} {/* Allow a variable number of paragraphs to be included in the section */}
            {/* Conditionally render link if provided */}
            {link != null &&
                <Link to={link.linkRoute}>{link.linkText}</Link>
            }
        </section>
    )
}

export default HeroSection;