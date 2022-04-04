import { Carousel, Container } from "react-bootstrap";
import About from "./About";
import DarbGallery from "./DarbGallery";

function Home() {
  return (
    <>
      <Container className="mainContent">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/home_page/darb_talks_justin.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>During Darb Talks Darbs Present on Whatever They Desire</h3>
              <p>Usually they're quite enlightening...</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/home_page/pumpkin_drop_1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Halloween Pumpkin Drop</h3>
              <p>
                Every year on Halloween night Dabney drops frozen pumpkins off
                of the tallest building on campus. <br></br>
                <a href="https://www.caltech.edu/about/news/at-caltech-every-halloween-falls-on-a-splatterday">
                  more details
                </a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/home_page/red_dress.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Sometimes Events Just Create Themselves</h3>
              <p>
                Our social events are scheduled at the start of each term (see
                the social calender), but sometimes random events emerge from
                the chaos that is Dabney Hovse...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      <About />
      <Container className="mainContent small-gallery">
        <DarbGallery />
      </Container>
    </>
  );
}

export default Home;
