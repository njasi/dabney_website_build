import React from "react";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";

function Darbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        className="navbar-custom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">Dabney Hovse</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/gallery">
                <Nav.Link>Gallery</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/socialcalender">
                <Nav.Link>Social Calender</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Contact" id="collasible-nav-dropdown">
                <NavDropdown.Item href="https://dabney.caltech.edu/wiki/doku.php?id=hovse_positions">
                  House Positions
                </NavDropdown.Item>
                <NavDropdown.Item href="https://dabney.caltech.edu/wiki/doku.php?id=student_resources">
                  Student Resources
                </NavDropdown.Item>
                <NavDropdown.Item href="https://directory.caltech.edu/EmergencyInfo">
                  Emergency
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/wiki">Wiki</NavDropdown.Item>
                <NavDropdown.Item href="/farther">Farther</NavDropdown.Item>
                <NavDropdown.Item href="/dinner">Dinner</NavDropdown.Item>
                <NavDropdown.Divider />
                <LinkContainer to="/socialcalender">
                  <NavDropdown.Item>Social Calender</NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Item href=" http://dabneylibrary.loganapple.com/">
                  Library Catalog
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <>
        <Offcanvas placement={"end"} show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Services</Offcanvas.Title>
            <>{/* http://dabneylibrary.loganapple.com/ */}</>
          </Offcanvas.Header>
          <Offcanvas.Body></Offcanvas.Body>
        </Offcanvas>
      </>
    </>
  );
}

export default Darbar;
