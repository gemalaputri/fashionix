import { FETCH_PRODUCTS } from "./action-types"

export function fetchProducts(products){
  return {
      type: "FETCH_PRODUCTS",
      products
  }
}
