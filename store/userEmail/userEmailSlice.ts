import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userEmailState {
  email: string;
}

const initialState: userEmailState = {
  email: "",
};

export const userEmailSlice = createSlice({
  name: "userEmail",
  initialState: initialState,
  reducers: {
    setUserEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
  },
});

export const { setUserEmail } = userEmailSlice.actions;
