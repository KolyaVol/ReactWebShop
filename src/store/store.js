import { configureStore } from '@reduxjs/toolkit'
import { isAuthReducer } from './isAuthReducer'
import { userName } from './userName'
import { prodListReducer } from './prodListReducer'
import { addToCartReducer } from './addToCartReducer'


const reducer = {
  prodList: prodListReducer,
  addToCart: addToCartReducer,
  isAuth: isAuthReducer,
  userName: userName
}

export const store = configureStore({reducer})
