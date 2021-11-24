
// PayPal is used, but it is designed to easily extend payment methods

import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector(state => state.cart)
  const { shippingAddress } = cart

  if(!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return <FormContainer>
    <CheckoutSteps step1 step2 step3/>
    <h1>Payment Method</h1> 
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label as='legend'>Select Method</Form.Label>
        <Col>
          <Form.Check
            type='radio'
            label='PayPal or Credit Card'
            id='PayPal'
            name='paymentMethod'
            value='PayPal'
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}>
          </Form.Check>
          
          {/* Add new payment method if needed */}
          {/* <Form.Check
            type='radio'
            label='Stripe'
            id='Stripe'
            name='paymentMethod'
            value='Stripe'
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}>
          </Form.Check> */}
        </Col>
      </Form.Group>

      <Button type='submit' variant='primary'>Continue</Button>
    </Form>
  </FormContainer>
}

export default PaymentScreen

// Interesting here - as='legend' - html tag to caption field set - look for it in w3s - kind of nice border around form fields
