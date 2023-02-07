import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userData {
  email: string;
  fullname: string;
  address: string;
}

interface userDataState {
  userData: userData;
}

const initialState: userDataState = {
  userData: {
    email: "",
    fullname: "",
    address: "",
  },
};

export const SignUpSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<userData>) => {
      state.userData = payload;
    },
  },
});

export const { setUserData } = SignUpSlice.actions;
