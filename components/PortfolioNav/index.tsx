"use client";

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const PortfolioNav = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="vw-100">
      <Container fluid="md">
        <Navbar.Brand href="" as={Link}>
          DARIO RUSSO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PortfolioNav;
