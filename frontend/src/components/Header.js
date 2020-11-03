import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant='dark' collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Mern Shop</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="ml-auto">
            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user'></i>Sign In</Nav.Link>
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
