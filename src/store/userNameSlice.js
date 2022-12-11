import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name: 'userName',
    initialState: {name: 'empt'},
    reducers: {
        userStateName(state, action) {
            state.name = action.payload
        },
    }
})

export default userNameSlice.reducer
export const {userStateName} = userNameSlice.actions