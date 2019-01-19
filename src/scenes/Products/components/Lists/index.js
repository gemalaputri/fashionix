import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Map, List, fromJS } from 'immutable'
import sortBy from 'lodash/sortBy'
import ProductItem from '../Item/index'
import productsData from '../../../../services/data/products.json' //excisting json data
import { fetchProducts } from '../../actions' //get actions from



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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (products) => dispatch(fetchProducts(products)), //activate fetchProducts from actions for update redux state
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Lists))
