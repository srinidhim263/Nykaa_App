import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { UserContext } from "../context/UserContext";

const AppBar = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {loggedInUser.role === "ADMIN" ? (
            <Navbar.Brand as={Link} to="/admin"></Navbar.Brand>
          ) : (
            <Navbar.Brand as={Link} to="/">
              Nykaa
            </Navbar.Brand>
          )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {!loggedInUser.isloggedIn ? (
                <>
                  {loggedInUser.role === "ADMIN" ? (
                    <NavLink as={Link} to="/login">
                      Logout
                    </NavLink>
                  ) : (
                    <>
                      <Nav.Link as={Link} to="/product">
                        Products
                      </Nav.Link>
                      <Nav.Link as={Link} to="/history">
                        History
                      </Nav.Link>
                      <Nav.Link as={Link} to="/login">
                        Logout
                      </Nav.Link>
                    </>
                  )}
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>
                  <Nav.Link as={Link} to="/admin">
                    Admin
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppBar;
