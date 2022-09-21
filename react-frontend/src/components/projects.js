import ScrollAnimation from "react-animate-on-scroll";
import "../styles/projects.scss";

const Projects = () => {
  const projects = [
    {
      name: "Odyssey",
      description: "Outdoor adventure planning",
      stack: "React, NodeJS, PostgreSQL",
      href: "https://github.com/Scott-Hillier/Odyssey",
      image: "../images/projects",
    },
    {
      name: "Interview Scheduler",
      description: "Scheduler to help individuals arrange their interviews",
      stack: "React",
      href: "https://github.com/Scott-Hillier/scheduler",
      image: "../images/projects",
    },
    {
      name: "Jungle",
      description: "E-commerce website for users to buy and sell items",
      stack: "Ruby on Rails",
      href: "https://github.com/Scott-Hillier/jungle",
      image: "../images/projects",
    },
    {
      name: "Tournament Organizer",
      description: "Tournament organizing website for the bike polo community",
      stack: "React, NodeJS, PostgreSQL",
      href: "https://github.com/Scott-Hillier/tournament-organizer",
      image: "../images/projects",
    },
    {
      name: "Wiki-Maps",
      description: "Outdoor adventure planning",
      stack: "Javascript, NodeJS, PostgreSQL",
      href: "https://github.com/Scott-Hillier/wiki-map",
      image: "../images/projects",
    },
  ];

  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../images/projects", false, /\.(png|jpe?g|svg)$/)
  );
  images.map((image, i) => {
    projects[i].original = image;
  });
  return (
    <section className="projects" id="projects">
      <h1>PROJECTS</h1>
      <br />
      <div className="project-area">
        {projects.map((project, i) => {
          return (
            <ScrollAnimation animateIn="fadeIn">
              <a href={project.href} className="project" key={i}>
                <h2>{project.name}</h2>
                <img src={project.original} className="project-image" />
                <p>{project.description}</p>
              </a>
            </ScrollAnimation>
          );
        })}
      </div>
      <br />
    </section>
  );
};

export default Projects;
