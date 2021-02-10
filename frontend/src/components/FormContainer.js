import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// children it is special prop that allows to "inherit" component.
// Everything that is inside <FormContainer>... here ...<> - via JSX nested inside the element.
const FormContainer = ({ children }) => {
  return (
    <Container>
      {/* className is taken from Bootstrap https://getbootstrap.com/docs/4.0/utilities/flex/ */}
      <Row className='justify-content-md-center'>
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
