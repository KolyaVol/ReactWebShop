import { configureStore } from '@reduxjs/toolkit'
import { isAuthReducer } from './isAuthReducer'
import { userName } from './userName'

const reducer = {
  isAuth: isAuthReducer,
  userName: userName
}

export const store = configureStore({reducer})
