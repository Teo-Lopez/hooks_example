import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, Dropdown, NavItem, NavLink } from 'react-bootstrap'

const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/simple/input">Simple Input</Nav.Link>
          <Nav.Link as={Link} to="/simple/form">Simple Form</Nav.Link>
        </Nav>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Choose your pokemon!</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item><Link to="/pokemon/132">Ditto</Link></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>;
      </Container>
    </Navbar>
  )
}

export default MainNavbar
