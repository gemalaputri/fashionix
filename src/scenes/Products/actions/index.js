import Promise from 'bluebird'
import { FETCH_PRODUCTS, ADD_FILTERED_PRODUCTS } from "./action-types"

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
