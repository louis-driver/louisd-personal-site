export default function ProjectSection({className, children}: {className: string, children: React.ReactNode}) {
    return (
        <section className={`project-section ${className}`}>
            <img className='top-transition' src="/TopTransition.svg" alt="Pixelated Transition" />
            {children}
            <img className='bottom-transition' src="/BottomTransition.svg" alt="Pixelated Transition" />
    	</section>
    )
}
