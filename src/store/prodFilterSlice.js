import { createSlice } from "@reduxjs/toolkit";

const prodFilterSlice = createSlice({
    name: 'isAuth',
    initialState: {
        prods: []
    },
    reducers: {
        filteredProds(state, actions) {
            state.prods = actions.payload
        } 
    }
})

export default prodFilterSlice.reducer
export const {filteredProds} = prodFilterSlice.actions