import React from "react";
import tiktoklogo from "../../images/tiktoklogo.png";
import profile from "../../images/faith-p.jpg";
import letter from "../../images/letter.svg";
import message from "../../images/message.svg";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";

const ProfileHeader = () => {
  return (
    <div>
      <Navbar
        variant="light"
        expand="lg"
        className="navContainer container-fluid"
        style={{ borderBottom: "1px solid lightgray" }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={tiktoklogo} className="App-logos" alt="logo" />
          </Navbar.Brand>
          <Nav.Item className="ml-auto"></Nav.Item>
          <Nav.Link href="#home">
            <img src={message} alt="logo" />
          </Nav.Link>
          <Nav.Item className="ml-auto">
            <Nav.Link href="#home">
              <img src={letter} alt="logo" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Nav.Link href="#home">
              <img
                src={profile}
                alt="logo"
                style={{ width: "35px", height: "35px", borderRadius: "50%" }}
              />
            </Nav.Link>
          </Nav.Item>

          {/* <Nav.Link href="#home">
            <img
              src={profile}
              alt="logo"
              style={{ width: "35px", height: "35px", borderRadius: "50%" }}
            />
          </Nav.Link> */}

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

export default ProfileHeader;
