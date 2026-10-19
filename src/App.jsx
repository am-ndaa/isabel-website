// This file contains the website's content and component structure
import './App.css'
import profileImage from './assets/profile_img.jpeg'
import himuroImage from './assets/japan.jpg'
import himuroDesignImage from './assets/japanicemachine.jpg'
import pngDayOneImage from './assets/png.jpg'
import pngProductImage from './assets/product.jpg'
import shpetinaOneImage from './assets/shpetina1.jpg'
import shpetinaTwoImage from './assets/shpetina2.jpg'

// This object stores the words and links shown on the page.
// You can edit the text here without needing to change the layout below.
// Change these details to make this website yours.
const siteInfo = {
  name: 'Isabel Tantalean',
  role: 'Mechanical Engineering Student',
  intro: 'I design practical solutions through engineering, research, and collaboration—and bring them to life from concept to implementation.',
  // Replace profile.png in src/assets to use your own profile picture.
  image: profileImage,
  location: 'Based in Gainesville, Florida',
  email: 'itantaleann@gmail.com',
  about: 'I am pursuing a B.S. in Mechanical Engineering with a minor in Engineering Innovation at the University of Florida (GPA: 4.0, May 2029). My experience spans product development, manufacturing, biomaterials research, and leadership in STEM communities.',
  // Add, remove, or rename languages and tools in this list.
  skills: [
    'SolidWorks (CSWA Certified)',
    'Fusion 360',
    'Onshape',
    '3D printing',
    'Welding and machining',
    'Design for manufacturing',
    'Power tools and soldering',
    'Microsoft 365',
    'CRLA Level 3 Training Certified Master Tutor',
    'Fluent in English and Spanish',
    'Learning Japanese',
  ],
  // Add projects under the category they belong to.
  projects: [
    {
      category: 'Internships',
      projects: [
        {
          title: 'Packaging Cost & Utilization Improvements',
          description: 'As an R&D Intern at Procter & Gamble in Cincinnati (May–Aug 2026), developed recommendations for consolidating bundle films that identified over $150K in cost savings—18% of annual material spend. Proposed site improvements that increased material utilization by 50% and reduced machine downtime by 50%, working across Purchasing, Engineering, and suppliers.',
          tag: 'Procter & Gamble · 2026',
          images: [
            { src: pngDayOneImage, alt: 'Isabel at Procter & Gamble on her first day' },
            { src: pngProductImage, alt: 'Isabel holding a ZzzQuil product bundle at work' },
          ],
        },
        {
          title: 'Kakigori Machine Product Line',
          description: 'Led a team at Himuro Ice in Osaka (Feb–May 2026) to research and develop a new line of Japanese shaved-ice machines from scratch. Created SolidWorks designs and evaluated functionality, marketability, manufacturability, and cost; the product is now in manufacturing. Represented the company at the HCJ convention in Tokyo.',
          tag: 'Himuro Ice · 2026',
          images: [
            { src: himuroImage, alt: 'Isabel presenting a Himuro shaved-ice machine at a Tokyo convention' },
            { src: himuroDesignImage, alt: 'Dimensioned concept sketch of a hand-cranked kakigori machine' },
          ],
        },
      ],
    },
    {
      category: 'Engineering Design',
      projects: [
        {
          title: 'Solar Vehicle Cockpit Systems',
          description: 'Designing a parking brake system for a custom rotor using SolidWorks and FEA. Also designed mounts for a gas strut to hold the vehicle canopy open for driver access and escape as part of a semester-long team integration project.',
          tag: 'Solar Gators · 2025–Present',
        },
      ],
    },
    {
      category: 'Research',
      projects: [
        {
          title: 'Biomaterials Research',
          description: 'At Florida Atlantic University’s Kang Biomaterials and Tissue Engineering Group (Jan 2024–May 2025), researched decellularized pig esophagus extracellular matrix as an alternative to animal testing in esophageal cancer research. Presented findings at the Spring 2025 OURI FAU Boca Raton Research Symposium.',
          tag: 'Undergraduate Research · 2024–2025',
        },
      ],
    },
    {
      category: 'Community & Leadership',
      projects: [
        {
          title: 'STEM Community & Mentorship',
          description: 'As SHPEtina Lead, organize professional and personal development events, including a brand-confidence workshop for over 100 Latinas in STEM, and build peer connections ahead of professional events. As a MentorSHPE mentor, support mentees through weekly mock interviews, resume reviews, and technical training.',
          tag: 'SHPE · 2026–Present',
          imageLayout: 'landscape',
          images: [
            { src: shpetinaOneImage, alt: 'Isabel with another SHPEtina member at a community event' },
            { src: shpetinaTwoImage, alt: 'SHPE members gathered for a community discussion' },
          ],
        },
      ],
    },
  ],
  // Add your social links here. You can remove any of these if you don't want them to show up.
  links: {
    github: 'https://github.com/your-username',
    linkedin: 'https://www.linkedin.com/in/isabel-tantalean/',
  },
}

// This takes the first word from the full name for the greeting.
const firstName = siteInfo.name.split(' ')[0]

// App is the main component, which means it describes the whole webpage.
function App() {
  return (
    // className connects this HTML-like element to styles in App.css.
    <div className="site-shell">
      <main>
        {/* The hero is the first section visitors see. */}
        <section className="hero">
          {/* This side contains the introduction text. */}
          <div className="hero-copy">
            <p className="eyebrow">{siteInfo.role}</p>
            <h1>Hi, I’m {firstName}.</h1>
            <p className="intro">{siteInfo.intro}</p>
          </div>

          {/* The image path and location come from siteInfo above. */}
          <div className="profile">
            <img className="profile-picture" src={siteInfo.image} alt={`Portrait of ${siteInfo.name}`} />
            <p>{siteInfo.location}</p>
          </div>
        </section>

        {/* This section explains who the person is and lists their skills. */}
        <section className="section" id="about">
          <div className="section-label">01 / About me</div>

          <div className="section-content">
            <h2>Curious by default.</h2>
            <p>{siteInfo.about}</p>

            {/* makes one bullet point for every item in siteInfo.skills. */}
            <ul className="skill-list" aria-label="Skills">
              {siteInfo.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
        </section>

        {/* This section groups project leaves under category branches. */}
        <section className="section" id="projects">
          <div className="section-label">02 / Selected work</div>

          <div className="section-content">
            <h2>Things I’m making.</h2>

            <ul className="project-tree">
              {siteInfo.projects.map((group) => (
                <li className="project-group" key={group.category}>
                  <h3 className="project-group-title">{group.category}</h3>
                  <ul className="project-leaves">
                    {group.projects.map((project) => (
                      <li className="project-leaf" key={project.title}>
                        <article className="project">
                          <p className="project-tag">{project.tag}</p>
                          <h4>{project.title}</h4>
                          <p className="project-description">{project.description}</p>
                          {project.images && (
                            <div className={`project-gallery${project.images.length === 1 ? ' project-gallery--single' : ''}${project.imageLayout ? ` project-gallery--${project.imageLayout}` : ''}`}>
                              {project.images.map((image) => (
                                <img
                                  className="project-gallery-image"
                                  key={image.src}
                                  src={image.src}
                                  alt={image.alt}
                                  loading="lazy"
                                />
                              ))}
                            </div>
                          )}
                        </article>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* The footer holds contact information and social links. */}
      <footer className="footer">
        <div>
          <p className="eyebrow">Have a question?</p>
          <a className="footer-email" href={`mailto:${siteInfo.email}`}>
            {siteInfo.email}
          </a>
        </div>

        <div className="footer-links">
          {/* <a href={siteInfo.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a> */}
          <a href={siteInfo.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>

        <p className="footer-note">Built with React + CSS</p>
      </footer>
    </div>
  )
}

export default App
