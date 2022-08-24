import ImageGallery from "react-image-gallery";
import "../styles/images.scss";

const Images = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../images", false, /\.(png|jpe?g|svg)$/)
  );
  const slideshow = [];
  images.map((image) => {
    slideshow.push({
      original: image,
      originalHeight: 400,
    });
  });
  return (
    <section className="images">
      <ImageGallery
        items={slideshow}
        autoPlay
        showBullets={false}
        showPlayButton={false}
        showFullscreenButton={false}
        slideInterval={5000}
        swipingTransitionDuration={500}
      />
    </section>

    // <section className="images">
    //   <div>
    //     <img
    //       className="image"
    //       src={imageState}
    //       alt="Strange, there should be photos of me here"
    //     ></img>
    //   </div>
    //   <div>
    //     <i
    //       className="bi bi-arrow-left-circle-fill"
    //       onClick={() => {
    //         index === 0 ? (index = images.length - 1) : index--;
    //         setImageState(images[index]);
    //       }}
    //     ></i>
    //     <img
    //       className="image"
    //       src={imageState}
    //       alt="Strange, there should be photos of me here"
    //     ></img>
    //     <i
    //       className="bi bi-arrow-right-circle-fill"
    //       onClick={() => {
    //         index === images.length - 1 ? (index = 0) : index++;
    //         setImageState(images[index]);
    //       }}
    //     ></i>
    //   </div>
    //   <div>
    //     <img
    //       className="image"
    //       src={imageState}
    //       alt="Strange, there should be photos of me here"
    //     ></img>
    //   </div>
    // </section>
  );
};

export default Images;
