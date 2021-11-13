import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
  const {user, logOut} = useAuth()
    return (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

      <Nav.Link as={HashLink} to="#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
      {user?.email?
      <Button variant="light" onClick={logOut}>Log out</Button>
      :
      <Nav.Link as={Link} to="/login">Login</Nav.Link>}

      <Navbar.Text>
        Signed in as: <span>{user?.displayName}</span>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>  
        </>
    );
};

export default Header;