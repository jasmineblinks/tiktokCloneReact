import React from "react";
import tiktoklogo from "../../images/tiktoklogo.png";
import dots from "../../images/menu-dots.svg";
import "./header.css";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar
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
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
             
              <Nav.Link href="superadmin" style={{ color: "#fff!important" }}>
                Super Admin
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
