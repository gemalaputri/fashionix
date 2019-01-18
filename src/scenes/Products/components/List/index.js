import React, {Component, Fragment} from 'react'
import ProductItem from '../Item/index'
import products from '../../../../services/data/products.json'

class List extends Component {
  render () {
    return (
      <div className="content">
        <ul className="product-list">
          {
            products.map((product) => (
              <ProductItem
                key={product.index}
                isSale={product.isSale}
                isExclusive={product.isExclusive}
                price={product.price}
                productImage={product.productImage}
                productName={product.productName}
                size={product.size} />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default List
