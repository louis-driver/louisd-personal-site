import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import HeroSection from '../components/HeroSection';
import TextSection from '../components/TextSection';

function SocietysPress() {
    const heroProps = {
        h3: "Reimagining",
        h2: "the Old Internet™",
        paragraphs: [{id: 0, paragraph: "People once conceived that the Internet could create a world that had freedom baked into it's architecture. Instead, we have a corporate-controlled dumpster fire that values profit over the well-being of individual users."},
          {id: 1, paragraph: "Call me naive, but who's stopping us from making that long-lost dream a reality?"}],
        children: null
    }

    const ethicsProps = {
        h2: "Ethics",
        h3: "End user exploitation",
        paragraphs: [{id: 0, paragraph: "The World Wide Web is full of successes and failures for end users. While Wikipedia and the growing Fediverse demonstrate the promise of decentralized models in our digital commons, the list of unethical uses of the Internet abounds. "},
            {id: 1, paragraph: "Consider social media's exploitation of human psychology to convert real people's time into advertising revenue. Or Amazon's influence on the rise of consumerism."}
            ,{id: 2, paragraph: "Or Elon Musk's overhaul of Twitter."}
            ,{id: 2, paragraph: "Or the gamification of sports betting."}
            ,{id: 2, paragraph: "Or misinformation being spread like wildfire."}
            ,{id: 2, paragraph: "Or [insert hundreds of other examples here]."}
            ,{id: 2, paragraph: "I could go on, but I have a feeling that you get the idea. The long story short is that companies increasingly utilize dark user experience design patterns to benefit from users, rather than providing actual value to them."}
        ]
    }

    const problemProps = {
        h2: "Problem",
        h3: "Poor incentives and paywalls",
        paragraphs: [{id: 0, paragraph: "The World Wide Web is full of successes and failures for end users. While Wikipedia and the growing Fediverse demonstrate the promise of decentralized models in our digital commons, the list of unethical uses of the Internet abounds. "},
            {id: 1, paragraph: "Consider social media's exploitation of human psychology to convert real people's time into advertising revenue. Or Amazon's influence on the rise of consumerism."}
            ,{id: 2, paragraph: "Or Elon Musk's overhaul of Twitter."}
            ,{id: 2, paragraph: "Or the gamification of sports betting."}
            ,{id: 2, paragraph: "Or misinformation being spread like wildfire."}
            ,{id: 2, paragraph: "Or [insert hundreds of other examples here]."}
            ,{id: 2, paragraph: "I could go on, but I have a feeling that you get the idea. The long story short is that companies increasingly utilize dark user experience design patterns to benefit from users, rather than providing actual value to them."}
        ]
    }

    const purposeProps = {
        h2: "Purpose",
        h3: "Aggregate quality, written content",
        paragraphs: [
            {id: 0, paragraph: "Or Elon Musk's overhaul of Twitter."}
            ,{id: 1, paragraph: "I'm not a writer, but I enjoy learning about a wide array of topics and reading high-quality content to do so. "}
            ,{id: 2, paragraph: "B."}
        ]
    }

    const systemDesignProps = {
        h2: "System Design",
        h3: "Scalable content moderation",
        paragraphs: [{id: 0, paragraph: "."},
            {id: 1, paragraph: "."}
        ]
    }

    const visualDesignProps = {
        h2: "Visual Design",
        h3: "Aged traditional print media",
        paragraphs: [{id: 0, paragraph: ""},
            {id: 1, paragraph: ""}
        ]
    }

    return (
        <>
        <Navbar />
        <Heading heading="Society's Press" />
        <HeroSection {...heroProps}/>
        <Heading heading="Process" />
        <TextSection {...ethicsProps} />
        <TextSection {...problemProps} />
        <TextSection {...purposeProps} />
        <TextSection {...systemDesignProps} />
        <TextSection {...visualDesignProps} />
        <Footer />
        </>
    )
}

export default SocietysPress;