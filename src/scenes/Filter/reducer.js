import { fromJS } from 'immutable'
import {
  PRODUCTS_FILTER_SORT_BY_SIZE,
  PRODUCTS_FILTER_SORT_BY_PRICE,
  PRODUCTS_CLEAR_FILTER_DATA
} from './actions/action-types'

const initFilterData = fromJS({
  size: false,
  price: false,
})
//first init we set size and price to false

export function productsFilterData(state = initFilterData, action) {
  switch (action.type) {
    case "PRODUCTS_FILTER_SORT_BY_SIZE":
      return fromJS(action.size)
    case "PRODUCTS_FILTER_SORT_BY_PRICE":
      return fromJS(action.price)
    case "PRODUCTS_CLEAR_FILTER_DATA":
      return fromJS({
        size: false,
        price: false,
      })
    default:
      return state
  }
}
