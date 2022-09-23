import "../styles/menu.scss";

const Menu = () => {
  const list = [
    { name: "About", href: "#images" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#educations" },
    { name: "Contact" },
  ];

  return (
    <section className="menu">
      {list.map((list, i) => {
        return (
          <a href={list.href} className="list-item" key={i}>
            <li
              onClick={() => {
                if (list.name === "Contact") {
                  document
                    .getElementById("iconList")
                    .classList.add("vertical-shake");
                  setTimeout(() => {
                    document
                      .getElementById("iconList")
                      .classList.remove("vertical-shake");
                  }, 1000);
                }
              }}
              key={i}
            >
              {list.name}
            </li>
          </a>
        );
      })}
    </section>
  );
};

export default Menu;
