import { configureStore } from "@reduxjs/toolkit";
import { itemSlice } from "./items/itemSlice";
import { userDataSlice } from "./userData/userDataSlice";

export const store = configureStore({
  reducer: {
    items: itemSlice.reducer,
    userData: userDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
