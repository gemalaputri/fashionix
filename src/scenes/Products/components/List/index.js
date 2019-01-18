import React, {Component, Fragment} from 'react'
import ProductItem from '../Item/index'

class List extends Component {
  render () {
    return (
      <div className="content">
        <ul className="product-list">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ul>
      </div>
    )
  }
}

export default List
