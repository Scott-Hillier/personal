import "../styles/contact.scss";

const Contact = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../icons", false, /\.(png|jpe?g|svg)$/)
  );
  const icons = [];
  images.map((image) => {
    icons.push({
      original: image,
    });
  });
  return (
    <section className="icons">
      {icons.map((icon, i) => {
        return (
          <img
            className="icon"
            src={icon.original}
            alt="Strange, there should be an icon here"
            key={i}
          ></img>
        );
      })}
    </section>
  );
};

export default Contact;
