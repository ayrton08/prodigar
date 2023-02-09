import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userData {
  email: string;
  fullname: string;
  address?: string;
  id?: number;
}

interface userDataState {
  userData: userData;
}

const initialState: userDataState = {
  userData: {
    email: "",
    fullname: "",
    address: "",
    id: Number("")
  },
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<userData>) => {
      state.userData = payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;
