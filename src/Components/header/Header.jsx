import React from "react";
import tiktoklogo from "../../images/tiktoklogo.png";
import dots from "../../images/menu-dots.svg";
import search from "../../images/search.svg";
import "./header.css";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-banner">
      {/* <Navbar
        variant="light"
        expand="lg"
        className="navContainer"
        style={{ borderBottom: "1px solid lightgray" }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={tiktoklogo} className="App-logos" alt="logo" />
          </Navbar.Brand>
          <Nav.Link href="#home" className="upload justify-content-center">
            Upload
          </Nav.Link>
          <Nav.Link href="#features">
            {" "}
            <Button
              size="sm"
              style={{
                backgroundColor: "#fe2c55",
                border: "none",

                // width: "80px",
                textAlign: "center",
                fontWeight: "bold",
              }}>
              Log in
            </Button>
          </Nav.Link>
          <Dropdown>
            <Dropdown.Toggle variant="light">
              <img src={dots} alt="logo" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar> */}
      <nav className="navbar">
        <img src={tiktoklogo} className="App-logos" alt="logo" />
        <form action="/action_page.php" className="form__banner">
          <input
            className="search__input"
            type="text"
            placeholder="Search accounts and videos"
            name="search"
          />
          <button className="search__submit" type="submit">
            <img src={search} alt="logo" />
          </button>
        </form>
        <ul className="nav-links">
          <li>Upload</li>
          <li className="btn">Log in</li>
          <li>
            <img src={dots} alt="logo" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
