import { configureStore } from '@reduxjs/toolkit'
import { isAuthReducer } from './isAuthReducer'
import { userName } from './userName'
import { prodListReducer } from './prodListReducer'
import { addToCartReducer } from './addToCartReducer'
import { counterReducer } from './counterReducer'


const reducer = {
  prodList: prodListReducer,
  addToCart: addToCartReducer,
  isAuth: isAuthReducer,
  userName: userName,
  counter: counterReducer,
}

export const store = configureStore({reducer})
