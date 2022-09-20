import ScrollAnimation from "react-animate-on-scroll";
import "../styles/education.scss";

const Education = () => {
  const educations = [
    {
      name: "Carleton University",
      certificate: "B.Eng.",
      description: "Aerospace Engineering",
      years: "2015-2020",
      href: "https://admissions.carleton.ca/programs/aerospace-engineering/",
    },
    {
      name: "Lighthouse Labs",
      certificate: "Diploma",
      description: "Full Stack Web Development",
      href: "https://www.lighthouselabs.ca/",
      years: "2021-2022",
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
      <h1>EDUCATION</h1>
      <br />
      {educations.map((education, i) => {
        console.log(education);
        return (
          <ScrollAnimation animateIn="fadeIn" key={i}>
            <div className={i % 2 ? "education-right" : "education-left"}>
              <img src={education.original} className="education-image" />
              <h1> </h1>
              <h4>{education.certificate}</h4>
              <h3>{education.description}</h3>
              <h5>{education.years}</h5>
            </div>
            <br />
          </ScrollAnimation>
        );
      })}
    </section>
  );
};

export default Education;
