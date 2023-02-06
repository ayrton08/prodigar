import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Location {
  lng: number | null;
  lat: number | null;
}

interface ItemState {
  picture: string;
  location: Location;
}

const initialState: ItemState = {
  picture: '',
  location: {
    lat: null,
    lng: null,
  },
};

export const itemSlice = createSlice({
  name: 'item',
  initialState: initialState,
  reducers: {
    setPicture: (state, { payload }: PayloadAction<string>) => {
      state.picture = payload;
    },
    setLocation: (state, { payload }: PayloadAction<Location>) => {
      state.location = payload;
    },
  },
});

export const { setPicture, setLocation } = itemSlice.actions;
