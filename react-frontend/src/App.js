import "./App.scss";
import Description from "./components/description";
import Navigation from "./components/navigation";
import Button from "react-bootstrap/Button";
import profile from "./images/Profile.jpeg";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Description />
      <header className="App-header">
        <img src={profile} className="profile" alt="logo" />
        <Button>This is a button</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
