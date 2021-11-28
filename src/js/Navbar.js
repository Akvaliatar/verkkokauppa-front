import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsCart4 } from "react-icons/bs";
import Logo from "../img/logo.png";
import Cart from "./Cart";

export default function NavBar({url, setCategory, cart}) {
  return (
    <div className="navi">
      <Container fluid className="mx-auto">
        <Row>
        <Col lg={9}>
            <div className="tunnistautuminen">
              <Link>
                <a>Kirjaudu</a>
              </Link>
              <Link>
                <a>Rekisteröidy</a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="kieli" xs={3} md={5}>
            <div>
              <a href="" className="FI">
                FI 
              </a>
              <a>|</a>
              <a href="" className="EN">
                EN
              </a>
            </div>
          </Col>
          <Col xs={6} md={2}>
            <figure>
              <Link to="">
                <img src={Logo} />
              </Link>
            </figure>
          </Col>
          <Col xs={3} md={5}>
            <p className="ostoskori">
              <Cart cart={cart} />
            </p>
          </Col>
        </Row>
      </Container>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Col>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto" className="navlinks">
                <Nav.Link href="/">
                  <h3>Home</h3>
                </Nav.Link>
                <Nav.Link href="/aboutus">
                  <h3>Meistä</h3>
                </Nav.Link>
                <Nav.Link href="/services">
                  <h3>Palvelut</h3>
                </Nav.Link>
                <Nav.Link href="/shop" >
                  <h3>Verkkokauppa</h3>
                </Nav.Link>
                <Nav.Link href="/about">
                  <h3>Omat tiedot</h3>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Container>
      </Navbar>
    </div>
  );
}
