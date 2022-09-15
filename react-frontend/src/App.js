import "./App.scss";
import Description from "./components/description";
import Contact from "./components/contact";
import Menu from "./components/menu";
import Images from "./components/images";
import Projects from "./components/projects";

function App() {
  return (
    <div className="App">
      <Menu />
      <section className="content">
        <Images />
        <Description />
        <Projects />
      </section>
      <Contact />
    </div>
  );
}

export default App;
