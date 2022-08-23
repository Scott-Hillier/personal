import { useState } from "react";

let index = 0;
const Images = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );
  const [imageState, setImageState] = useState(images[0]);
  return (
    <section className="images">
      <div>
        <i
          className="bi bi-arrow-left-circle-fill"
          onClick={() => {
            index === 0 ? (index = images.length - 1) : index--;
            setImageState(images[index]);
            console.log("index", index);
          }}
        ></i>
        <img
          className="image"
          src={imageState}
          alt="Strange, there should be photos of me here"
        ></img>
        <i
          className="bi bi-arrow-right-circle-fill"
          onClick={() => {
            index === images.length - 1 ? (index = 0) : index++;
            setImageState(images[index]);
            console.log("index", index);
          }}
        ></i>
      </div>
    </section>
  );
};

export default Images;
