import React, { useContext } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaFlagUsa } from "react-icons/fa";
import { Authcontext } from "../../Context/Usercontext";
const Header = () => {
  const { user, logout } = useContext(Authcontext);
  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <Navbar className="nav" expand="lg">
        <Container fluid>
          <Navbar.Brand className="logo">
            <Link className="itemss" to="/home">
              VILLAGIO
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="items" to="/home">
                HOME
              </Link>

              <Link className="items" to="/service">
                SERVICE
              </Link>
              <Link to="/news" className="items">
                NEWS
              </Link>
              <Link className="items">STYLE GUIDE</Link>
              <Link className="items">SHOP</Link>
            </Nav>
            <Nav>
              {/* <FaInstagram className="instra"></FaInstagram>
              <FaFacebook className="instra"></FaFacebook>
              <div className="country">
                <FaFlagUsa></FaFlagUsa>
                <p className="flag">USA</p>
              </div> */}
              {user?.email ? (
                <Link onClick={handlelogout} className="items">
                  LOG OUT
                </Link>
              ) : (
                <Link className="items" to="/signup">
                  SIGNUP
                </Link>
              )}
              <Link className="items" to="/login">
                LOGIN
              </Link>

              {user?.email && <span className="user">{user.displayName}</span>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
