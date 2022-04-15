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
import profile from "../../images/pese.jpg";
import profile2 from "../../images/goddy.jpg";
import profile3 from "../../images/jus.jpg";
import profile4 from "../../images/godison.jpg";

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
  @media only screen and (max-width: 850px) {
    top: 85px;
  }
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
        {/* <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link> */}
        <Nav.Link>
          <img
            src={profile}
            alt="logo"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Nav.Link>
        <Nav.Link>
          <img
            src={profile2}
            alt="logo"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Nav.Link>
        <Nav.Link>
          <img
            src={profile3}
            alt="logo"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Nav.Link>
        <Nav.Link>
          <img
            src={profile4}
            alt="logo"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Nav.Link>
      </Nav>
    </StyledSideNav>
  );
};

export default SideNav;
