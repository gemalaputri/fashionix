import Promise from 'bluebird'
import {
  PRODUCTS_FILTER_SORT_BY_SIZE,
  PRODUCTS_FILTER_SORT_BY_PRICE,
  PRODUCTS_CLEAR_FILTER_DATA
} from './action-types'

export function productsFilterBySizeSuccess(size){
  return {
      type: PRODUCTS_FILTER_SORT_BY_SIZE, //filter by size
      size
  }
}

export function productsFilterByPriceSuccess(price){
  return {
      type: PRODUCTS_FILTER_SORT_BY_PRICE, //filter by price
      price
  }
}

export function productsClearFilterDataSuccess(){
  return {
      type: PRODUCTS_CLEAR_FILTER_DATA, //clear filter
  }
}

export function productsFilterBySize(size) {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			resolve(dispatch(productsFilterBySizeSuccess(size)))
		})
	}
}

export function productsFilterByPrice(price) {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			resolve(dispatch(productsFilterByPriceSuccess(price)))
		})
	}
}

export function productsClearFilterData() {
	return (dispatch) => {
		return new Promise((resolve, reject) => {
			resolve(dispatch(productsClearFilterDataSuccess()))
		})
	}
}
