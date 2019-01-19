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
