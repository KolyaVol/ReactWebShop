import { combineReducers, configureStore } from '@reduxjs/toolkit'
import prodListSlice from './prodListSlice'
import CartSlice from './cartSlice'
import isAuthSlice from './isAuthSlice'
import userNameSlice from './userNameSlice'
import prodFilterSlice from './prodFilterSlice'
import sortSlice from './sortSlice'



const reducer = combineReducers({
  prodList: prodListSlice,
  addToCart: CartSlice,
  isAuth: isAuthSlice,
  userName: userNameSlice,
  filteredProdList: prodFilterSlice,
  sortType: sortSlice
})

export const store = configureStore({reducer})
