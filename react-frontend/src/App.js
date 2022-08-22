import "./App.scss";
import Description from "./components/description";
import Navigation from "./components/navigation";
import Contact from "./components/contact";
import Menu from "./components/menu";
import Images from "./components/images";
import Button from "react-bootstrap/Button";
import photo from "./images/Profile.jpeg";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Menu />
      <Images photo={photo} />
      <Description />
      <Button>This is a button</Button>
      <Contact />
    </div>
  );
}

export default App;
