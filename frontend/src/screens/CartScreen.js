import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1 // location.search = "?qty=1". Basically it is querystring

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  console.log(cartItems) // for understanding

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])


  return (
    <div>
      Cart
    </div>
  )
}

export default CartScreen

// "location" in props in order to get querystring from URL
// "history" in props in order to be able to redirect 