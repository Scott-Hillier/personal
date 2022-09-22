import { useEffect, useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/projects.scss";

const Projects = () => {
  const [description, setDescription] = useState(false);

  const projects = [
    {
      name: "Odyssey",
      description:
        "Outdoor adventure planningOutdoor adventure planningOutdoor adventure planningOutdoor adventure planningOutdoor adventure planningOutdoor adventure planningOutdoor adventure planningOutdoor adventure planningOutdoor adventure planningOutdoor adventure plannings",
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

  let index = 0;

  const [project, setProject] = useState(projects[index]);

  const nextProject = () => {
    index === projects.length ? (index = 0) : index++;
    setProject(projects[index]);
    console.log(index);
  };

  const previousProject = () => {
    index === 0 ? (index = projects.length - 1) : index--;
    setProject(projects[index]);
    console.log(index);
  };

  return (
    <section className="projects" id="projects">
      <h1>PROJECTS</h1>
      <br />
      <ScrollAnimation animateIn="fadeIn">
        <div className="project-area">
          <i
            className="bi bi-arrow-bar-left project-arrow"
            onClick={() => {
              previousProject();
            }}
          ></i>
          <div className="project">
            <a href={project.href}>
              <h2 className="project-title">{project.name}</h2>
              <img src={project.original} className="project-image" />
            </a>
            <i
              onClick={(event) => {
                description ? setDescription(false) : setDescription(true);
              }}
              className="bi bi-arrow-bar-down"
            ></i>
            <h4 className={description ? "project-description" : "hidden"}>
              {project.description}
            </h4>
          </div>
          <i
            className="bi bi-arrow-bar-right project-arrow"
            onClick={() => {
              nextProject();
            }}
          ></i>
        </div>
      </ScrollAnimation>
      <br />
    </section>
  );
};

export default Projects;
