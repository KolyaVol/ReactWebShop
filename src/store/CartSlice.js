import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        prods:[]
    },
    reducers: {
        addToCart(state, action) {
            state.prods = [...state.prods, action.payload]
        },
        pasteCartArr(state, action) {
            state.prods = [...action.payload]
        },
        removeCartProd(state,action) {
            state.prods = state.prods.filter(prod => prod.id !== action.payload)
        },
        removeOneProd(state, action) {
            state.prods = state.prods.filter((prod, index) => state.prods.findIndex(prod => prod.id === action.payload) !== index)
        }
    }
})

export default CartSlice.reducer
export const {addToCart, pasteCartArr, removeCartProd, removeOneProd} = CartSlice.actions