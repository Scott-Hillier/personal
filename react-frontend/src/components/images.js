import ImageGallery from "react-image-gallery";
import "../styles/images.scss";

const Images = () => {
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context("../images/personal", false, /\.(png|jpe?g|svg)$/)
  );
  const slideshow = [];
  images.map((image) => {
    slideshow.push({
      original: image,
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
        showNav={false}
        slideInterval={7000}
        swipingTransitionDuration={5000}
      />
    </section>
  );
};

export default Images;
