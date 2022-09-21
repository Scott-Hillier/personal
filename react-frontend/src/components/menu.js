import "../styles/menu.scss";

const Menu = () => {
  const list = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#educations" },
    { name: "Contact" },
  ];

  return (
    <section className="menu">
      {list.map((list, i) => {
        return (
          <a href={list.href} className="list-item" key={i}>
            <li key={i}>{list.name}</li>
          </a>
        );
      })}
    </section>
  );
};

export default Menu;
