import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Map, List, set, fromJS } from 'immutable'
import ProductItem from '../Item/index'
import productsData from '../../../../services/data/products.json' //excisting json data
import { fetchProducts, addFilteredProducts } from '../../actions' //get actions from



class Lists extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true //it will change after get all of products data
    }
  }

  componentDidMount() {
    const { fetchProducts } = this.props

    fetchProducts(productsData) //fetch data from json named productsData, process to reducer

    this.setState({isLoading: false}) //deactivate loading bar
  }

  componentWillReceiveProps(nextProps, nextState) {
    //check if any filter changed, it can check from our productsFilterData's props
    if(nextProps.productsFilterData !== this.props.productsFilterData) {
      this.handleChangeFilterSize() //if any changes, call the function to sorting the products
      return true
    }
    return false
  }

  handleChangeFilterSize = () => {
    const { products, addFilteredProducts, productsIndexes, fetchProducts } = this.props

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
      const _productsIndexes = productsIndexes.map( key => {
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

  render () {
    const { products } = this.props
    const { isLoading } = this.state

    return (
      <div className="content">
        <ul className="product-list">
          { //mapping products list if products is not empty
            !this.props.products.isEmpty() &&
            products && products.map((product) => (
              <ProductItem //we post some props to component target
              key={product.get('index')}
              isSale={product.get('isSale')}
              isExclusive={product.get('isExclusive')}
              price={product.get('price')}
              productImage={product.get('productImage')}
              productName={product.get('productName')}
              size={product.get('size')} />
            ))
          }
          {isLoading &&
            <div>Loading...</div> //it will show while products data is empty
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products, //products data from redux state
    productsFilterData: state.productsFilterData,
    productsIndexes: state.productsIndexes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (products) => dispatch(fetchProducts(products)), //activate fetchProducts from actions for update redux state
    addFilteredProducts: (indexes) => dispatch(addFilteredProducts(indexes)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Lists))
