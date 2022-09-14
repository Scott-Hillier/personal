import "../styles/contact.scss";

const Contact = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../icons", false, /\.(png|jpe?g|svg)$/)
  );
  const sources = [
    "https://www.linkedin.com/in/scott-hillier-11aaa5197/",
    "https://github.com/Scott-Hillier",
  ];
  const icons = [];
  images.map((image, i) => {
    icons.push({
      original: image,
      href: sources[i],
    });
  });
  return (
    <section className="icons">
      <a href="https://www.linkedin.com/in/scott-hillier-11aaa5197/">
        <img
          className="icon"
          src="/static/media/01_linkedin.032cf8a63be2f0f4d425.png"
          alt="Strange, there should be an icon here"
        />
      </a>
      <a href="https://github.com/Scott-Hillier">
        <img
          className="icon"
          src="/static/media/02_github.f11021803f68852df283.png"
          alt="Strange, there should be an icon here"
        />
      </a>
      <a href="https://github.com/Scott-Hillier">
        <img
          className="icon"
          src="/static/media/03_email.67bda94140af311d041f.png"
          alt="Strange, there should be an icon here"
        />
      </a>
      <a href="https://github.com/Scott-Hillier">
        <img
          className="icon"
          src="/static/media/04_phone.2fa539562c029c1d51b6.png"
          alt="Strange, there should be an icon here"
        />
      </a>
    </section>
  );
};

export default Contact;
