import "./App.scss";
import Description from "./components/description";
import Contact from "./components/contact";
import Menu from "./components/menu";
import Images from "./components/images";
import Projects from "./components/projects";
import Education from "./components/education";

function App() {
  return (
    <div className="App">
      <Menu />
      <section className="content">
        <br />
        <Images />
        <br />
        <Description />
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <Education />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>Thanks for stopping by!</h3>
      </section>
      <Contact />
    </div>
  );
}

export default App;
