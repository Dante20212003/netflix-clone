import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  status: "checking" | "not-authenticated" | "authenticated";
  user: {
    name: string;
    email: string;
    profile?: string;
  };
}

const initialState: AuthState = {
  status: "not-authenticated",
  user: {
    name: "",
    email: "",
    profile: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setChecking: (state) => {
      state.status = "checking";
      /*       state.user = {} as User; */
    },
    setLogin: (
      state,
      { payload }: PayloadAction<{ name: string; email: string }>
    ) => {
      state.status = "authenticated";
      state.user = payload;
    },
    setProfile: (state, { payload }: PayloadAction<string>) => {
      state.user.profile = payload;
    },
    setLogout: (state) => {
      state.status = "not-authenticated";
      state.user = { name: "", email: "", profile: "" };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChecking, setLogin, setProfile, setLogout } =
  authSlice.actions;

export default authSlice.reducer;
