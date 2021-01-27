import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Dumbways.id</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link to="/" as={Link}>
          Home
        </Nav.Link>
        <Nav.Link to="/increament" as={Link}>
          Increament
        </Nav.Link>
        <Nav.Link to="/conditional-rendering" as={Link}>
          Conditional Rendering
        </Nav.Link>
        <Nav.Link to="/list" as={Link}>
          List
        </Nav.Link>
        <Nav.Link to="/modal" as={Link}>
          React Bootstrap
        </Nav.Link>
        <Nav.Link to="/todo" as={Link}>
          Todo
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default NavbarComponent;
