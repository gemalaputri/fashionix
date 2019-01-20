import Promise from 'bluebird'
import { FETCH_PRODUCTS, ADD_FILTERED_PRODUCTS } from "./action-types"
import { removeRegexCharacter } from '../../../helpers/global'

export function fetchProducts(products){
  return {
      type: "FETCH_PRODUCTS",
      products
  }
}

export function addFilteredProductsSuccess(indexes){
  return {
      type: "ADD_FILTERED_PRODUCTS",
      indexes
  }
}

export function addFilteredProducts(indexes) {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			resolve(dispatch(addFilteredProductsSuccess(indexes)))
		})
	}
}

export function restructureAllProducts(products) {
  return (dispatch) => {
		return new Promise((resolve, reject) => {
      const _products = products.map((product) => {
        return {
          index: product.index,
          isSale: product.isSale,
          isExclusive: product.isExclusive,
          price: parseFloat(removeRegexCharacter(product.price)), //convert string to float and remove all char
          productImage: product.productImage,
          productName: product.productName,
          size: product.size,
        }
      })
      dispatch(fetchProducts(_products)) //dispatch restructured data to process in reducer
    })
  }
}
