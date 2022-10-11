import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface RegisterState {
  email: string;
  password: string;
  plan: "basico" | "estandar" | "premium";
}

const initialState: RegisterState = {
  email: "",
  password: "",
  plan: "basico",
};

export const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    setEmailPassword: (
      state,
      { payload }: PayloadAction<{ email: string; password: string }>
    ) => {
      state.email = payload.email;
      state.password = payload.password;
    },
    setPlan: (
      state,
      { payload }: PayloadAction<"basico" | "estandar" | "premium">
    ) => {
      state.plan = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEmail, setEmailPassword, setPlan } = registerSlice.actions;

export default registerSlice.reducer;
