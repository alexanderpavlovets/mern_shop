import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  // products = name, setProducts = function to handle their state
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }

    fetchProducts()
  }, []) // empty array for dependencies. Read about it mor.

  return (
    <>
      <h1>Latest products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen

//  <Col sm={12} md={6} lg={4} xl={3}> - react -bootstrap GRID in docs

// useState hook is instead of state in calss Componenets

// useEffect hook - as soon as component loads