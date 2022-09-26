import { useState } from "react";
import "../styles/contact.scss";

const Contact = () => {
  const [displayPhone, setDisplayPhone] = useState(false);
  const [displayEmail, setDisplayEmail] = useState(false);

  return (
    <section className="contact">
      <div
        className={` ${displayEmail ? "email-popup-active" : "email-popup"}`}
      >
        scotthhillier@gmail.com
      </div>
      <div
        className={` ${displayPhone ? "phone-popup-active" : "phone-popup"}`}
      >
        613-402-5186
      </div>
      <div className="icons" id="iconList">
        <a href="https://www.linkedin.com/in/scott-hillier-11aaa5197/">
          <i className="bi bi-linkedin icon"></i>
        </a>
        <a href="https://github.com/Scott-Hillier">
          <i className="bi bi-github icon"></i>
        </a>
        <a href="mailto:scotthhillier@gmail.com">
          <i
            className="bi bi-envelope-fill icon"
            onClick={() => {
              displayEmail ? setDisplayEmail(false) : setDisplayEmail(true);
              navigator.clipboard.writeText("scotthhillier@gmail.com");
            }}
          ></i>
        </a>
        <i
          className="bi bi-telephone-fill icon"
          onClick={() => {
            displayPhone ? setDisplayPhone(false) : setDisplayPhone(true);
            navigator.clipboard.writeText("613-402-5186");
          }}
        ></i>
      </div>
    </section>
  );
};

export default Contact;
