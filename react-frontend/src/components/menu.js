import { useState } from "react";
import "../styles/menu.scss";

const Menu = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <section className={menuState ? "menu-extended" : "menu"}>
      <i
        className="bi bi-list menu-bars"
        onClick={() => {
          menuState ? setMenuState(false) : setMenuState(true);
        }}
      ></i>
    </section>
  );
};

export default Menu;
