import "../styles/menu.scss";

const Menu = () => {
  const list = [
    { name: "About" },
    { name: "Projects" },
    { name: "Education" },
    { name: "Contact" },
  ];

  return (
    <section className="menu">
      {list.map((list, i) => {
        return (
          <li className="list-item" key={i}>
            {list.name}
          </li>
        );
      })}
    </section>
  );
};

export default Menu;
