import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Map, List, fromJS } from 'immutable'
import {
  productsFilterBySize,
  productsFilterByPrice,
  productsClearFilterData,
} from '../actions'
import { fetchProducts, addFilteredProducts } from '../../Products/actions' //get actions from

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
        .then(() => {
          this.handleChangeFilterSize() //call the function to sorting the products by sizeChart
        })
      })

    } else if(e.target.value === 'price') {
      productsClearFilterData()
      .then(() => {
        productsFilterByPrice(true)
        .then(() => {
          this.handleChangeFilterPrice() //call the function to sorting the products by price
        })
      })
    } else {
      productsClearFilterData()
      .then(() => {
        this.handleChangeClearFilter() //call the function to sorting the products by index
      })
    }
  }

  handleChangeClearFilter = () => {
    const { fetchProducts } = this.props

    const _products = this.props.products.sort(function(a,b){return a.get('index')-b.get('index')})

    fetchProducts(_products) //dispatch to products
  }

  handleChangeFilterSize = () => {
    const { products, addFilteredProducts, fetchProducts } = this.props

    const sizeChart = ["XS","S","M","L","XL"] //assign a number for each string
    const _sortable = products.map( product => {
      const _sort = sizeChart.findIndex( k => k === product.get('size').get(0))
      return fromJS({
        index: product.get('index'),
        sort: _sort
      })
    })
    {/* we take the first string of size
      * check the string and give the number based our sizeChart
      * create new object contain the "product id" and number of sizeChart in "sort" key
      * the _sortable object is not sorted yet
      */}
    const result = _sortable.sort(function(a,b){return a.get('sort')-b.get('sort')}) //sorted _sortable

    addFilteredProducts(result) // dispatch to be productsIndexes
    .then(() => {
      let _productFiltered = [] // new array for sorted product
      const _productsIndexes = this.props.productsIndexes.map( key => {
        const _products = products.filter( item => {
          if(item.get('index') === key.get('index')) {
            _productFiltered.push(item)
            return false
          } else {
            return true
          }
        }).first()
      })
      {/* we already have productsIndexes with "product id as index"
        * filter existing/old products with mapping it first
        * check if the existing product id is equal to product id in productsIndexes
        * then push the product content to new array of products
        * we sorted new products by productsIndexes.
        */}

      fetchProducts(fromJS(_productFiltered))
      // dispatch new products by productsIndexes to replace existing products
    })
  }

  handleChangeFilterPrice = () => {
    const { fetchProducts } = this.props

    const _products = this.props.products.sort(function(a,b){return a.get('price')-b.get('price')})

    fetchProducts(_products) //dispatch to products
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
    products: state.products, //products data from redux state
    productsFilterData: state.productsFilterData,
    productsIndexes: state.productsIndexes
  }
}

const mapDispatchToProps  = (dispatch) => {
  return {
    productsFilterBySize: (size) => dispatch(productsFilterBySize(size)),
    productsFilterByPrice: (price) => dispatch(productsFilterByPrice(price)),
    productsClearFilterData: () => dispatch(productsClearFilterData()),
    fetchProducts: (products) => dispatch(fetchProducts(products)), //activate fetchProducts from actions for update redux state
    addFilteredProducts: (indexes) => dispatch(addFilteredProducts(indexes)),
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Select))
