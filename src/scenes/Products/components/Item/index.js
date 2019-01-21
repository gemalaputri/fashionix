//@flow

import React, { Component } from 'react'
import './styles.scss'

type Props = {
  isSale: boolean,
  isExclusive: boolean,
  price: string,
  productImage: string,
  productName: string,
}

class Item extends Component<Props> {
  render () {
    const {
      isSale,
      isExclusive,
      price,
      productImage,
      productName,
    } = this.props

    return (
      <li className="product-item product-item--border">
        <div className="product-item__picture">
          <img src={require(`../../../../images/Products/${productImage}`)} alt="" />
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
