import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ItemState {
  picture: string;
}

const initialState: ItemState = {
  picture: '',
};

export const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    setPicture: (state, { payload }: PayloadAction<string>) => {
      state.picture = payload;
    },
  },
});

export const { setPicture } = itemSlice.actions;

export const selectItem = (state: RootState) => state.items;
