import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { isAuthReducer } from './isAuthReducer'
import { userName } from './userName'
import { prodListReducer } from './prodListReducer'
import { addToCartReducer } from './addToCartReducer'
import prodListSlice from './prodListSlice'
import CartSlice from './CartSlice'
import isAuthSlice from './isAuthSlice'
import userNameSlice from './userNameSlice'

const reducer1 = {
  prodList: prodListReducer,
  addToCart: addToCartReducer,
  isAuth: isAuthReducer,
  userName: userName,
}

const reducer = combineReducers({
  prodList: prodListSlice,
  addToCart: CartSlice,
  isAuth: isAuthSlice,
  userName: userNameSlice,
})

export const store = configureStore({reducer})
