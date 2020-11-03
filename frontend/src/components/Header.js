import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Mern Shop</Navbar.Brand>
          </LinkContainer>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="ml-auto">
            <LinkContainer to='/cart'>
              <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link><i className='fas fa-user'></i>Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </header>
  )
}

export default Header

// <Navbar bg="dark" variant='dark' collapseOnSelect> - missing expand="lg" - with it - just menu icon
// Commented out Navbar - because if uncomment - nothing changes, ony after adding mentioned above expand - menu appears. Not like in video at all.

// classNames like "fas fa-smth" "far fa-smth" are taken from fontawesome, that is imported in index.html fron cdn.js
