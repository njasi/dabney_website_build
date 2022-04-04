// import { Carousel } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Gallery from "react-grid-gallery";
import images from "./gallery.json";

function DarbGallery() {
  return (
    <>
      <h1>Gallery</h1>
      <p>
        "Surviving Caltech isn't always easy. Sometimes you just need to take
        some time out of your your day to have a good laugh."
      </p>
      <Gallery images={images} />
    </>
  );
}

export default DarbGallery;
