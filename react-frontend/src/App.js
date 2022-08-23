import "./App.scss";
import Description from "./components/description";
import Contact from "./components/contact";
import Menu from "./components/menu";
import Images from "./components/images";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Menu />
      <Images />
      <Description />
      <Button>This is a button</Button>
      <Contact />
    </div>
  );
}

export default App;
