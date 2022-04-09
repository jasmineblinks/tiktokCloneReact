import React, { useState } from "react";
import "./login.css";
import { Form, Modal, Button } from "react-bootstrap";
import user from "../../images/user.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import google from "../../images/google.svg";
import apple from "../../images/apple.svg";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="base">
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="title">
            <h3>Log in to TikTok</h3>
            <p>
              Manage your account,check notifications,comment on videos, and
              more
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
      <div className="container">
        <h3>Log in to TikTok</h3>
        <p>
          {" "}
          Manage your account,check notifications,comment on videos, and more .
        </p>
        <div className="btnClass">
          <button className="btn-social">
            <span className="btn__icon">
              <img src={user} alt="logo" />
            </span>
            Use phone/email/username
          </button>
          <button className="btn-social">
            <span className="btn__icon">
              {" "}
              <img src={facebook} alt="logo" />
            </span>
            <span className="btn__text">Continue with Facebook</span>
          </button>
          <button className="btn-social">
            <span className="btn__icon">
              <img src={google} alt="logo" />
            </span>
            <span className="btn__text"> Continue with Google</span>
          </button>
          <button className="btn-social">
            <span className="btn__icon">
              {" "}
              <img src={twitter} alt="logo" />
            </span>
            <span className="btn__text"> Continue with Twitter</span>
          </button>
          <button className="btn-social">
            <span className="btn__icon">
              {" "}
              <img src={apple} alt="logo" />
            </span>
            <span className="btn__text"> Continue with Apple</span>
          </button>
          <button className="btn-social">
            <span className="btn__icon">
              <img src={instagram} alt="logo" />
            </span>
            <span className="btn__text">Continue with Instagram</span>
          </button>
        </div>
        <footer>
          {" "}
          <p>
            Dont have an account? <a href="">Sign up</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
