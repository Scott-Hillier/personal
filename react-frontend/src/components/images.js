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
      originalWidth: 100,
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
  );
};

export default Images;
