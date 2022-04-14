import React from "react";
import styled from "styled-components";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import homes from "../../images/homes.svg";
import people from "../../images/people.svg";
import videot from "../../images/videot.svg";

const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 75px;
  z-index: 1;

  background-color: #fff;
  overflow-x: hidden;
  padding-top: 10px;
  top: 79px;
  border-right: 1px solid lightgray;
`;

const SideNav = () => {
  return (
    <StyledSideNav>
      <Nav
        // className="flex-column"
        style={{
          display: "flex",

          alignItems: "center",
          margin: "auto",
          justifyContent: "center",
          flexWrap: "none",
        }}>
        <Nav.Link eventKey="link-2">
          {" "}
          <img src={homes} alt="logo" style={{ color: "#fe2c55 !important" }} />
        </Nav.Link>
        <Nav.Link eventKey="link-1">
          {" "}
          <img src={people} alt="logo" />
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          {" "}
          <img src={videot} alt="logo" />
        </Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </StyledSideNav>
  );
};

export default SideNav;
