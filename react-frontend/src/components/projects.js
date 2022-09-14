const Projects = () => {
  const projects = [
    {
      name: "Odyssey",
      description: "Outdoor adventure planning",
      stack: "React, NodeJS, PostgreSQL",
      image: "../images/projects",
    },
    {
      name: "Tournament Organizer",
      description: "Tournament organizing website for the bike polo community",
      stack: "React, NodeJS, PostgreSQL",
    },
    {
      name: "Jungle",
      description: "E-commerce website for users to buy and sell items",
      stack: "Ruby on Rails",
    },
    {
      name: "Wiki-Maps",
      description: "Outdoor adventure planning",
      stack: "Javascript, NodeJS, PostgreSQL",
    },
  ];

  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../images/projects", false, /\.(png|jpe?g|svg)$/)
  );
  images.map((image, i) => {
    projects[i]["image"] = image;
  });
  return (
    <section className="projects">
      {projects.map((project) => {
        return (
          <div className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
