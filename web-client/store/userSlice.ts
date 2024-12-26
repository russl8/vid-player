import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    signIn: (state, action) => {
      state.value = action.payload;
    },
    signOut: (state) => {
      state.value = null;
    },
    setUser:(state,action) => {
        state.value = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut,setUser } = userSlice.actions;

export default userSlice.reducer;
