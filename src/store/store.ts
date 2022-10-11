import { registerSlice, authSlice } from "./auth";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { register: registerSlice.reducer, auth: authSlice.reducer},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
