import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import {
  productsFilterBySize,
  productsFilterByPrice,
  productsClearFilterData,
} from '../actions'

class Select extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedFilter: '',
    }
  }

  handleChangeFilter = (e) => {
    const {
      productsFilterBySize,
      productsFilterByPrice,
      productsClearFilterData
    } = this.props

    this.setState({
      selectedFilter: e.target.value,
    })

    if(e.target.value === 'size') {
      productsClearFilterData()
      .then(() => {
        productsFilterBySize(true)
      })
    } else if(e.target.value === 'price') {
      productsClearFilterData()
      .then(() => {
        productsFilterByPrice(true)
      })
    } else {
      productsClearFilterData()
      console.log("clear");
    }
  }

  render () {
    return (
      <select onChange={this.handleChangeFilter} value={this.selectedFilter}>
        <option value="">Filter by</option>
        <option value="size">Filter by size</option>
        <option value="price">Filter by price</option>
      </select>
    )
  }
}

const mapStateToProps  = (state) => {
  return {
    productsFilterData: state.productsFilterData
  }
}

const mapDispatchToProps  = (dispatch) => {
  return {
    productsFilterBySize: (size) => dispatch(productsFilterBySize(size)),
    productsFilterByPrice: (price) => dispatch(productsFilterByPrice(price)),
    productsClearFilterData: () => dispatch(productsClearFilterData()),
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Select))
