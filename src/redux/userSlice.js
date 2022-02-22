import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Quy Pham",
  age: "23",
  about: "I am a student",
  avaUrl: "https://i.redd.it/ksmb0m02ppy51.png",
  themeColor: "red",
  pending: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateError: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.avaUrl;
      state.themeColor = action.payload.themeColor;
    },
  },
});
export const { updateStart, updateError, updateSuccess } = userSlice.actions;
export default userSlice.reducer;
