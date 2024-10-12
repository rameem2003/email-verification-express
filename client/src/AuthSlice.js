import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("test")
      ? JSON.parse(localStorage.getItem("test"))
      : "",
  },
  reducers: {
    LoginReducer: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("test", JSON.stringify(action.payload));
    },

    LogoutReducer: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("test", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { LoginReducer, LogoutReducer } = AuthSlice.actions;

export default AuthSlice.reducer;
