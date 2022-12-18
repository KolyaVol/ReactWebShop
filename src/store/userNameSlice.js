import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name: 'userName',
    initialState: {firstName: ''},
    reducers: {
        userStateName(state, action) {
            state.firstName = action.payload
        },
    }
})

export default userNameSlice.reducer
export const {userStateName} = userNameSlice.actions