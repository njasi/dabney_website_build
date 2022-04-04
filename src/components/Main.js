import { Container } from "react-bootstrap";
import { Routes, Route, HashRouter } from "react-router-dom";

// import Container from "react-bootstrap/Container";
import Calender from "./Calender";
import Darbar from "./Darbar";
import Home from "./Home";
import DarbGallery from "./DarbGallery";
import About from "./About";

function Router() {
  return (
    <HashRouter>
      <Darbar />

      <Routes>
        <Route path="socialcalender" element={<Calender />} />
        <Route path="/" element={<Home />} />
        {/* <Home/> */}
        <Route
          path="gallery"
          element={
            <Container className="mainContent">
              <DarbGallery />
            </Container>
          }
        />

        <Route path="about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
