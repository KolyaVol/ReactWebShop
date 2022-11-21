import { configureStore } from '@reduxjs/toolkit'
import { isAuthReducer } from './isAuthReducer'
import { cash } from './cash'

const reducer = {
  isAuth: isAuthReducer,
  cash: cash
}

export const store = configureStore({reducer})
