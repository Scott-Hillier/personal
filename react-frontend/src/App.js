import "./App.scss";
import Description from "./components/description";
import Contact from "./components/contact";
import Menu from "./components/menu";
import Images from "./components/images";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Menu />
      <section className="content">
        <Images />
        <Description />
        <Contact />
      </section>
    </div>
  );
}

export default App;
