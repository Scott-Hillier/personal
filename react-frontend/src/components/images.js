// import photos from "../images/";
import photo from "../images/Profile.jpeg";

const Images = () => {
  console.log("PHOTO", photo);
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <section>
      {images.map((imgSrc, index) => {
        return (
          <img
            className="image"
            src={imgSrc}
            key={index}
            alt="Strange, there should be photos of me here"
          />
        );
      })}
    </section>
  );
};

export default Images;
