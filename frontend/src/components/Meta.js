import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to MernShop',
  description: 'This is fake web page, we do not sell anything here',
  keywords: 'fake electronics, fake buy, cheap-like'
}

export default Meta
