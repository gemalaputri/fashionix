import React from 'react'
import { connect } from 'react-redux'
import ProductList from './components/List/index'
import Filter from '../Filter'
import './styles.scss'

class Products extends React.Component {
  render () {
    return (
      <div className="container">
        <Filter />
        <ProductList />
      </div>
    )
  }
}

export default Products
