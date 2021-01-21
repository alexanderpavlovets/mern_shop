import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    // See react bootstrap docs for this properties
    <Spinner animation='border' role='status' style={{width: '100px', height: '100px', margin: 'auto', display: 'block'}}>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader
