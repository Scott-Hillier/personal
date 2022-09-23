import { useState } from "react";
import "../styles/projects.scss";

const Projects = () => {
  const projects = [
    {
      name: "Odyssey",
      description:
        "Outdoor adventure planningsOutdoor adventure planningsOutdoor adventure planningsOutdoor adventure planningsOutdoor adventure planningsOutdoor adventure planningsOutdoor adventure plannings",
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
    return (projects[i].original = image);
  });

  const [index, setIndex] = useState(0);

  const adjacent = (index) => {
    if (index === -1) {
      return projects.length - 1;
    }

    if (index === projects.length) {
      return 0;
    }

    return index;
  };

  return (
    <section className="projects" id="projects">
      <h1>PROJECTS</h1>
      <br />
      <div className="project-area">
        {projects.map((project, i) => {
          const indexLeft = adjacent(index - 1);
          const indexRight = adjacent(index + 1);

          let className = "project";

          if (i === index) {
            className += " project--active";
          } else if (i === indexRight) {
            className += " project--right";
          } else if (i === indexLeft) {
            className += " project--left";
          } else {
            className += " project--hidden";
          }

          return (
            <div className={className} key={i} onClick={() => setIndex(i)}>
              <h2 className="project-title">{project.name}</h2>
              <img
                src={project.original}
                className="project-image"
                alt="Wow such empty"
              />
              <h4 className="project-description">{project.description}</h4>
            </div>
          );
        })}
      </div>
      <br />
    </section>
  );
};

export default Projects;
