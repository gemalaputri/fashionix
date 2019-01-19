import React from 'react'
import ProductList from './components/Lists/index'
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
