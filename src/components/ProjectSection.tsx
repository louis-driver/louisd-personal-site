export default function ProjectSection({className, children}: {className: string, children: React.ReactNode}) {
    return (
        <section className={`project-section ${className}`}>
            <div className="top-transition"/>
                {children}
            <div className="bottom-transition" />
        </section>
    )
}
