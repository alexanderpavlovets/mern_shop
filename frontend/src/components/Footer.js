import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy; MernShop
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

//  <Col className='py-3'> = padding on y axes = 3 (top and bottom)
