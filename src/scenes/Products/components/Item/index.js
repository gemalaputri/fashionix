import React, { Component } from 'react'
import './styles.scss'

class Item extends Component {
  render () {
    const {
      isSale,
      isExclusive,
      price,
      productImage,
      productName,
      size
    } = this.props

    return (
      <li className="product-item product-item--border">
        <div className="product-item__picture">
          image here
        </div>
        <div className="product-item__status">
          <div className={`status__button status__button${isSale? '--sale' : ''}${isExclusive? '--exclusive': ''}`}>
            {isSale? 'sale': ''}
            {isExclusive? 'Exclusive': ''}
          </div>
        </div>
        <div className="product-item__desc">
          <div className="desc-name">
            {productName}
          </div>
          <div className="desc-price">
            {price}
          </div>
        </div>
      </li>
    )
  }
}

export default Item
