import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./items/itemSlice";
import { SignUpSlice } from "./signup/signupSlice";

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    userData: SignUpSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
