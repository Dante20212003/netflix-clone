import { registerSlice, authSlice } from "./auth";
import { configureStore } from "@reduxjs/toolkit";
import { netflixSlice } from "./netflix";

export const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    auth: authSlice.reducer,
    netflix: netflixSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
