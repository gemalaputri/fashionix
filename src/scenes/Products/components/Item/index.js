import React, {Component} from 'react'
import './styles.scss'

class Item extends Component {
  render () {
    return (
      <li className="product-item product-item--border">
        <div className="product-item__picture">
          picture here
        </div>
        <div className="product-item__status">
          <div className="status__button status__button--sale">
            Sale
          </div>
        </div>
        <div className="product-item__desc">
          <div className="desc-name">
            Product Name
          </div>
          <div className="desc-price">
            Price
          </div>
        </div>
      </li>
    )
  }
}

export default Item
