import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SlideMenu from "react-slide-menu";

const nav = [
  { id: "home", label: "Home", path: "/" },
  { id: "about", label: "About", path: "/about" },
  { id: "discover", label: "Discover", path: "/discover" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SlideMenu
      // active={this.state.slideMenuActive}
      nav={nav}
      // reactRouter={true}
      // closeMenu={() => this.setState({ slideMenuActive: false })}
    >
      <App />
    </SlideMenu>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
