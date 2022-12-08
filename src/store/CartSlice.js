import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.prods = [...state.prods, action.payload]
        },
        pasteCartArr(state, action) {
            state.prods = [...action.payload]
        },
        removeProd(state,action) {
            state.prods = state.prods.filter(prod => prod.id !== action.payload)
        },
        removeOneProd(state, action) {
            state.prods = state.prods.filter(index =>
                 state.prods.findIndex(prod => prod.id == action.payload) !== index)
        }
    }
})

export default cartSlice.reducer
export const {addToCart, pasteCartArr, removeProd, removeOneProd} = cartSlice.actions