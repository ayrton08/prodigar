import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userData {
  email: string;
  fullName: string;
  address?: string;
  id?: number;
}

interface userDataState {
  userData: userData;
}

const initialState: userDataState = {
  userData: {
    email: '',
    fullName: '',
    address: '',
    id: Number(''),
  },
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: initialState,
  reducers: {
    setUserData: (state, { payload }: PayloadAction<userData>) => {
      state.userData = payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;
