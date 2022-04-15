import React from "react";
import tiktoklogo from "../../images/tiktoklogo.png";
import profile from "../../images/profile.jpg";
import letter from "../../images/letter.svg";
import search from "../../images/search.svg";
import message from "../../images/message.svg";
import upload from "../../images/upload.svg";
import "./profileheader.css";
const ProfileHeader = () => {
  return (
    <div className="nav-banner">
      {/* <Navbar
        variant="light"
        expand="lg"
        className="navContainer container-fluid"
        style={{
          borderBottom: "1px solid lightgray",
          backgroundColor: "#ffffff",
        }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={tiktoklogo} className="App-logos" alt="logo" />
          </Navbar.Brand>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              {" "}
              <Nav.Link href="#home">
                <img src={upload} alt="logo" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#home">
                <img src={message} alt="logo" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#home">
                <img src={letter} alt="logo" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#home">
                <img
                  src={profile}
                  alt="logo"
                  style={{ width: "35px", height: "35px", borderRadius: "50%" }}
                />
              </Nav.Link>
            </Nav.Item>
          </Nav>
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
          <li className="upload">
            {" "}
            <img src={upload} alt="logo" />
          </li>
          <li>
            {" "}
            <img src={message} alt="logo" />
          </li>
          <li>
            <img src={letter} alt="logo" />
          </li>
          <li>
            <img
              src={profile}
              alt="logo"
              style={{ width: "35px", height: "35px", borderRadius: "50%" }}
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileHeader;
