import { createSlice } from "@reduxjs/toolkit";

const isAuthSlice = createSlice({
  name: "isAuth",
  initialState: false,
  reducers: {
    signIn(state) {
      state = true;
    },
    signOut(state) {
      state = false;
    },
  },
});

export default isAuthSlice.reducer;
export const { signIn, signOut } = isAuthSlice.actions;
