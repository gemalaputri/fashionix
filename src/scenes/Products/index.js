import React from 'react'
import { connect } from 'react-redux'
import ProductList from './components/List/index'
import './styles.scss'

class Products extends React.Component {
  render () {
    return (
      <div className="container">
        <ProductList />
      </div>
    )
  }
}

export default Products
