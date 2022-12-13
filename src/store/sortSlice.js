import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sortSlice',
    initialState: {
        sort: ''
    },
    reducers: 
    {
        sortKind(state, actions) {
            state.sort = actions.payload
        } 
    }
})

export default sortSlice.reducer;
export const {sortKind} = sortSlice.actions