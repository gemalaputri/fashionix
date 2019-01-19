import { Map, fromJS } from 'immutable'
import { FETCH_PRODUCTS } from './actions/action-types'

export function products(state = Map({}), action) {
  switch (action.type) {
    case "FETCH_PRODUCTS":
        return fromJS(action.products)
    default:
      return state
  }
}

export function productsIndexes(state = Map({}), action) {
  switch (action.type) {
    case "ADD_FILTERED_PRODUCTS":
        return fromJS(action.indexes)
    default:
      return state
  }
}
