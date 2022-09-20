import ScrollAnimation from "react-animate-on-scroll";
import "../styles/education.scss";

const Education = () => {
  const educations = [
    {
      name: "Carleton University",
      description: "B. Eng. Aerospace Engineering \n Aerodynamics & Propulsion",
      years: "2015-2020",
      href: "https://admissions.carleton.ca/programs/aerospace-engineering/",
    },
    {
      name: "Lighthouse Labs",
      description: "Full Stack Web Development",
      href: "https://www.lighthouselabs.ca/",
    },
  ];

  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../images/education", false, /\.(png|jpe?g|svg)$/)
  );
  images.map((image, i) => {
    educations[i].original = image;
  });

  console.log(educations);

  return (
    <section className="educations">
      <h2>EDUCATION</h2>
      {educations.map((education, i) => {
        console.log(education);
        return (
          <ScrollAnimation animateIn="fadeIn" key={i}>
            <div className={i % 2 ? "education-left" : "education-right"}>
              <img src={education.original} className="education-image" />
              <h2>{education.name}</h2>
              <h3 className="education-description">{education.description}</h3>
            </div>
          </ScrollAnimation>
        );
      })}
    </section>
  );
};

export default Education;
