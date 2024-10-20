import Footer from '../components/Footer';
import Heading from '../components/Heading';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import TextSection from '../components/TextSection';

function Smithsonian() {

  const heroProps = {
    h3: "This was",
    h2: "a typographic study",
    paragraphs: [{id: 0, paragraph: "This project served to study typography’s importance in web design along with its capabilities for creating an interesting design without reliance on imagery."},
      {id: 1, paragraph: "Enjoy."}],
    children: <a href="https://smithsonian-by-louis.netlify.app/" target="_blank">Check it out!</a>
}

const purposeProps = {
  h2: "Purpose",
  h3: "Dynamic, yet repeatable concepts",
  paragraphs: [{id: 0, paragraph: "As an assignment for my web design course, I was given the task of creating a website for displaying an institution’s exhibitions using typographic hierarchy rather than images. Such focus on typography reinforced the fundamental nature of websites, which is (generally) to share textual information."},
    {id: 1, paragraph: "The purpose of the assignment was to show the importance of typography choices in creating a feeling related to an organization’s branding, while also exploring the iterative process inherent in the design workflow. Not only was typography important, but the value of color studies was also demonstrated as a key component of considering how to brand an organization."}
  ]
}

const typographyProps = {
    h2: "Typography",
    h3: "Classy, with a hint of history",
    paragraphs: [{id: 0, paragraph: "Given that I was representing the Smithsonian as an instituiton, I wanted my typography choices to evoke a timeless feeling, as the Smithsonian was founded in 1846. Thus, I opted for Times New Roman as a classic representation of serif fonts as a whole, and Volkorn as my larger display font, since sans-serif fonts didn't exist during the Smithsonian's foundation. However, I opted to use Inter as an additional type pairing, despite it being a sans-serif typeface, to represent so called \"meta\" data about each exhibition."},
      {id: 1, paragraph: "As for the actual composition of each exhibition as a \"chunk\" (a styled grouping of copy text), I utlimately settled on chunk that had a visual separation between an exhibition's title and meta data and its description. To give weight to the description, I used the block of color in the left padding to lead the viewer's attention after seeing the Larger title."}
    ]
}

const colorProps = {
    h2: "Color",
    h3: "A modern palette with a classic feel",
    paragraphs: [{id: 0, paragraph: "Once again considering the branding of the Smithsonian, I couldn't rightly ignore the colors of their logo, so I decided to given them more weight in my design compared to their actual website. As my primary color to match the blue and yellow of the Smithsonian logo, I figured what's a more classic combination of colors than the primary colors. However, a vibrant red would feel too \"in your face\", so I chose a deeper, muted maroon. Finally, to add to my historic design theme, I opted for an off-white cream background color that would allude to aged and tattered papers that could be found at a museum."},
      {id: 1, paragraph: "The Smithsonian is also dedicated to the sciences and modern studies as well though, so I didn't want to isolate the design away from their progress as an institution in today's world. To mitigate against this, I used the brighter blue from their logo in their future exhibitions page to signal that modernity and their dedication to new discoveries."}
    ]
}

const layoutProps = {
    h2: "Layout",
    h3: "Repeatable, yet visually interesting",
    paragraphs: [{id: 0, paragraph: "A website’s layout and structure is dependent on the information it intends to share. This website had the requirement of sharing information about exhibitions, which all share information in a repeating format, specifically the hierarchy designed and selected in the typography studies. However, I wanted to strike a balance between signaling that each exhibit is different from the one before and after it -- I wanted the reader to not become lost in a page of exhibits with the same structure. "},
        {id: 1, paragraph: "To achieve this goal, I varied the layouts to have an alternating pattern, an array of colors, a variety of widths, and combinations of these individual aspects. I decided to use the length of the left-padding bars as a way to include variety, and rejected the concept of introducing multiple colors within one section of exhibitions to limit the visual “busyness” and increase cohesion for each page. With color being excluded as a factor in one page, I was able to use it across pages to distinguished between future and past exhibitions."}
    ]
}

  return (
    <>
        <Navbar />
        <Heading heading="Smithsonian-by-Louis" />
        <HeroSection {...heroProps}/>
        <Heading heading="Process" />
        <TextSection {...purposeProps} />
        <TextSection {...typographyProps} />
        <TextSection {...colorProps} />
        <TextSection {...layoutProps} />
        <Footer />
        </>
  )
}

export default Smithsonian