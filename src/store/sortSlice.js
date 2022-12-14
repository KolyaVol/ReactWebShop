import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: 'sortSlice',
    initialState: {
        sort: 'name',
        query: ''
    },
    reducers: 
    {
        sortKind(state, actions) {
            state.sort = actions.payload
        } ,
        queryKind(state, actions) {
            state.query = actions.payload
        } 
    }
})

export default sortSlice.reducer;
export const {sortKind, queryKind} = sortSlice.actions