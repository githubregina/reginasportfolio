import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => {
  return (
    <header>
      <Navbar sticky="top" variant="dark" expand="md">
        <Container>
          <Navbar.Brand
            href="/"
            style={{ color: "#ffbc00", fontSize: "1.8rem" }}
          >
            {siteTitle}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/experience">Experience</Nav.Link>
              <Nav.Link href="/certificate">Certificate</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
