import "../styles/contact.scss";

const Contact = () => {
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
      <a href="mailto: scotthhillier@gmail.com">
        <img
          className="icon"
          src="/static/media/03_email.67bda94140af311d041f.png"
          alt="Strange, there should be an icon here"
        />
      </a>
      <img
        onClick={() => {
          alert("613-402-5186");
        }}
        className="icon"
        src="/static/media/04_phone.2fa539562c029c1d51b6.png"
        alt="Strange, there should be an icon here"
      />
    </section>
  );
};

export default Contact;
