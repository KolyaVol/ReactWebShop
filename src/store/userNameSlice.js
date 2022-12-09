import { createSlice } from "@reduxjs/toolkit";

const userNameSlice = createSlice({
    name: 'userName',
    initialState: '',
    reducers: {
        userStateName(state, actions) {
            state = actions.payload
        },
    }
})

export default userNameSlice.reducer
export const {userStateName} = userNameSlice.actions