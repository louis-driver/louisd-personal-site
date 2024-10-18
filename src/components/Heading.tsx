import "../styles/Heading.css";

function Heading({ heading }: { heading: string }) { {/* Define heading as string for typescript */}
    return (
        <h1 className="section-heading">{heading}</h1>
    )
}

export default Heading;