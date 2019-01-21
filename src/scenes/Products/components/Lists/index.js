// @flow

import React, {Component} from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import isEmpty from 'lodash/isEmpty'
import { Map } from 'immutable'
import ProductItem from '../Item/index'
import productsData from '../../../../services/data/products.json' //excisting json data
import { restructureAllProducts } from '../../actions' //get actions from

type Props = {
  products: Map<string, any>,
  restructureAllProducts: Function,
};

type State = {
  isLoading: boolean
}

class Lists extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true //it will change after get all of products data
    }
  }

  componentDidMount() {
    const { restructureAllProducts } = this.props
    restructureAllProducts(productsData) //fetch data from json named productsData, process to reducer

    this.setState({isLoading: false}) //deactivate loading bar
  }

  render () {
    const { products } = this.props
    const { isLoading } = this.state

    return (
      <div className="content">
        <ul className="product-list">
          { //mapping products list if products is not empty, giving react props to children
            !isEmpty(products) &&
            products && products.map((product) => (
              <ProductItem
                key={product.get('index')}
                isSale={product.get('isSale')}
                isExclusive={product.get('isExclusive')}
                price={`$${product.get('price')}`}
                productImage={product.get('productImage')}
                productName={product.get('productName')}
              />
          )).valueSeq().toArray()
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
    restructureAllProducts: (products) => dispatch(restructureAllProducts(products))
    //fetch Products from actions for update redux state for the first init
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Lists))
