import "../styles/contact.scss";

const Contact = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../images/icons", false, /\.(png|jpe?g|svg)$/)
  );
  const icons = [];
  images.map((image, i) => {
    icons.push(image);
  });

  return (
    <section className="icons">
      <a href="https://www.linkedin.com/in/scott-hillier-11aaa5197/">
        <img
          className="icon"
          src={icons[0]}
          alt="Strange, there should be an icon here"
        />
      </a>
      <a href="https://github.com/Scott-Hillier">
        <img
          className="icon"
          src={icons[1]}
          alt="Strange, there should be an icon here"
        />
      </a>
      <a href="mailto: scotthhillier@gmail.com">
        <img
          className="icon"
          src={icons[2]}
          alt="Strange, there should be an icon here"
        />
      </a>
      <a>
        <img
          onClick={() => {
            alert("613-402-5186");
          }}
          className="icon"
          src={icons[3]}
          alt="Strange, there should be an icon here"
        />
      </a>
    </section>
  );
};

export default Contact;
