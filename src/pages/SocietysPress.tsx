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
        children: <a href='https://www.figma.com/proto/lFLANZVftqxVbD6s0avpcs/Society-s-Press?page-id=0%3A1&node-id=155-6512&viewport=-4651%2C421%2C0.66&t=IyEI9oXl00Rt8jmj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=155%3A6512&show-proto-sidebar=1' target='_blank'>View the Figma Prototype</a>
    }

    const ethicsProps = {
        h2: "Ethics",
        h3: "End user exploitation",
        paragraphs: [{id: 0, paragraph: "The World Wide Web is full of successes and failures for end users. While Wikipedia and the growing Fediverse demonstrate the promise of decentralized models in our digital commons, the list of unethical uses of the Internet abounds. "},
            {id: 1, paragraph: "Consider social media's exploitation of human psychology to convert real people's time into advertising revenue. Or Amazon's influence on the rise of consumerism."}
            ,{id: 2, paragraph: "Or the gamification of sports betting."}
            ,{id: 3, paragraph: "Or misinformation being spread like wildfire."}
            ,{id: 4, paragraph: "Or [insert hundreds of other examples here]."}
            ,{id: 5, paragraph: "I could go on, but I have a feeling that you get the idea. The long story short is that companies increasingly utilize dark user experience design patterns to benefit from users, rather than providing actual value to them. My platform's design emphasizes the user as a supporter, not a resource that can be exploited."}
        ]
    }

    const problemProps = {
        h2: "Current Market",
        h3: "Paywalls and searchability",
        paragraphs: [
            {id: 0, paragraph: "To start, it will be helpful to understand the specific domain this project references: medium format publications, like Medium.com, Substack, and personal blogs."}
            ,{id: 1, paragraph: "While high-quality, written information exists on the internet, it's not always easy to access. Numerous factors contribute to this accessibilty problem, like paywalls and searchability. While Medium and Substack address the issue of aggregating information, their models create new issues."}
            ,{id: 2, paragraph: "To monetize their business, Medium sells subscriptions that allow users to read \"Member-only\" stories, which restricts access to information. Medium's dedication to subscriptions results in decisions that intentionally detract from non-paying users' experiences. For example, their website prevent users from filtering to show posts that are free to read and obscures the ability to read posts when not signed in to the platform. This choice may make sense financially to the company, but as a reader who has yet to see any content, why on earth would I sign up for a service whose quality I have yet to vet?"}
            ,{id: 3, paragraph: "Substack's monetization model addresses Medium's issue of flat-rate subscriptions to acess content. They do so by allowing publishers to charge their followers for access to exclusive content (or simply wish to financially support a publisher). This model incentivizes writers to consistently produce content that users value enough to pay for. Despite their early appeal, Substack has shifted away from their original model centered around newsletters. The platform now feels much more like an engagement-driven social media site, highlighting a feed similar Twitter, Bluesky, or Threads."}
            ,{id: 4, paragraph: "Personal blogs can share valuable information with a dedicated audience, but they generally rank low in search engine results and are often dedicated to niche subjects to sustain an audience dedicated to that topic. Due to their specificity and reliance on a single author, personal blogs cannot satiate a reader's desire for a variety of content."}
        ]
    }

    const purposeProps = {
        h2: "Purpose",
        h3: "Promote quality, written content",
        paragraphs: [
            {id: 0, paragraph: "I'm not a writer, but I enjoy learning about a wide array of topics and reading high-quality content to do so."}
            ,{id: 1, paragraph: "I believe that information should be free to access, as knowledge is fundamental to progressing society and upholding democratic institutions. At it's core, information is a non-rivalrous good, because sharing it does not diminish the owner's capacity to use it. Given my values and a perceived faults in the exisiting market, I sought to create an alternative."}
            ,{id: 2, paragraph: "My platform challenges the typical conception of how user-generated content should be published. We now expect instant feedback from our digital experiences, but just because we can allow instant publication, doesn't mean we should. By moderating content before publication, we can prevent the most egregious content (misinformation, hate speech, incivility) from ever being platformed in the first place."}
        ]
    }

    const systemDesignProps = {
        h2: "System Design",
        h3: "Scalable content moderation",
        paragraphs: [
            {id: 0, paragraph: "To allow this moderation system to scale, a user must review three other posts before submitting theirs to the moderation system. Similarly, each post submitted must be reviewed by three other users. Within this review process, a series of checks and balances must be included to prevent exploitation by malicious actors. To prevent people from leaving low-effort critique, writers will be required to review the critique they've received before publishing their article (if it was deemed ready for publication by the reviewers)."}
            ,{id: 1, paragraph: "Due to the more restrictive nature of this moderation system, it's also important to frame the moderation requirements as a benefit to users, not an annoyance. Not only does pre-publication moderation prevent harmful content, it can be used to filter out low-quality content for readers, while also helping writers improve their work."}
            ,{id: 3, paragraph: "To incentivize high-quality work, my platform proposes to monetize the work of an writer via deliberate choice from the end users, much like Substack. Counter to Substack, however, a user's subscription fee is simply divided among writers the user follows. This monetization model allows readers to support the authors they explicitly choose to, while not required the reader to pay $5, $10, or $20 for every single writer they value."}
        ]
    }

    const visualDesignProps = {
        h2: "Visual Design",
        h3: "Aged traditional print media",
        paragraphs: [{id: 0, paragraph: "The concept of this platform was inspired by the Enlightment. I imagined the bustling coffeehouses of 18th century England, that permitted anyone of any class to participate in civil discourse. I saw a newsboy running between coffeehouses, gripping a stack of newspapers, in order to share the latest news. "},
            {id: 1, paragraph: "I envisioned the Parisian salons, full of intellectuals like Montesquieu, Voltaire, and Benjamin Franklin. These salons brought to mind imagery of the flamboyant ornamentation that characterized the Rococo era. Despite the exhuberant scenes brought to my mind, the boisterous conversations of a coffeehouse do not easily translate to the web as a medium. Neither does the flamboyant attire and architecture of the Rococo period."}
            ,{id: 2, paragraph: "Thus, I instead chose to emulate how text was shared in this time - through books, newspapers, and pamphlets. The design for the site is largely static, as something created with a printing press isn't interactive. However, I break from this design choice in specific scenarios that greatly increase user experience (e.g. pop-up confirmations, save buttons that stay visible on scroll, and dynamic forms)."}
            ,{id: 3, paragraph: "Furthering the emulation of traditional print that references old books and newspapers, the background for the site utilizes the color and texture of an aged piece of paper. Additionally, the graphics used within the site ahve also been sourced directly from old printer's catalogs."}
        ]
    }

    const conclusionProps = {
        h3: "Check out the entire",
        h2: "Thought Process",
        paragraphs: [{id: 0, paragraph: "If you're interested in seeing the research and specific details about this platform's ideation, I have just the thing for you! Fair warning though, it's about 70 pages long (some are full of pictures at least¿)."},
          {id: 1, paragraph: "I plan to implement this idea as an actual website, so that's what I'll be working on these next few months, but I'll update this page once a prototype is accessible. If you're interested in learning more, or have some feedback, I'd love for you to reach out!"}],
        children: <a href='https://digitalcommons.murraystate.edu/honorstheses/284/' target='_blank'>Read the Full Thesis</a>
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
        <HeroSection {...conclusionProps}/>
        <Footer />
        </>
    )
}

export default SocietysPress;