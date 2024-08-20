import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/">
        <img src={Logo} alt="logo" width={100} height={100} />
      </Navbar.Brand>
      <Navbar.Toggle bg="light" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto nav-lists" id="nav-list">
          <Nav.Link className="nav-list" href="/">
            HomePage
          </Nav.Link>
          <Nav.Link className="nav-list" href="/Shop">
            Shop
          </Nav.Link>
          <Nav.Link className="nav-list" href="/Show">
            Show
          </Nav.Link>
          <Nav.Link className="nav-list" href="/Cart">
            Cart
          </Nav.Link>
          <Nav.Link className="nav-list" href="/about_us">
            About US
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
