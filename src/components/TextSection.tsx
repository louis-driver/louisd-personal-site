import "../styles/TextSection.css";

{/* Define prop types for typescript */}
interface TextSectionProps {
    h2: string;
    h3: string;
    paragraphs: Paragraph[];
}

interface Paragraph {
    id: number;
    paragraph: string;
}

function TextSection({ h2, h3, paragraphs }: TextSectionProps) {
    return (
        <section className="text-section" >
            <header className="text-header">
                <h2>{h2}</h2> {/* Display h2 prop in component */}
                <h3>{h3}</h3> {/* Display h3 prop in component */}
            </header>
            {paragraphs.map(({id, paragraph}) => <p key={id}>{paragraph}</p>)} {/* Allow a variable number of paragraphs to be included in the section */}
        </section>
    )
}

export default TextSection;