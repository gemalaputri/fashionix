import {
  PRODUCTS_FILTER_SORT_BY_SIZE,
  PRODUCTS_FILTER_SORT_BY_PRICE,
  PRODUCTS_CLEAR_FILTER_DATA
  } from "./action-types"

export function productsFilterBySize(size){
  return {
      type: "PRODUCTS_FILTER_SORT_BY_SIZE", //filter by size
      size
  }
}

export function productsFilterByPrice(price){
  return {
      type: "PRODUCTS_FILTER_SORT_BY_PRICE", //filter by price
      price
  }
}

export function productsClearFilterData(){
  return {
      type: "PRODUCTS_CLEAR_FILTER_DATA", //clear filter
  }
}
