import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TemplateState {
  open: boolean;
  search: boolean;
  config: boolean;
  category: string;
  allCategories: any[];
}

const initialState: TemplateState = {
  open: false,
  search: false,
  config: false,
  category: "",
  allCategories: [],
};

export const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  reducers: {
    setCategory: (state, { payload }: PayloadAction<string>) => {
      state.category = payload;
    },
    setOpen: (state) => {
      state.open = !state.open;
    },
    setCategories: (state, { payload }: PayloadAction<any[]>) => {
      state.allCategories = payload;
    },
    setSearch: (state) => {
      state.search = !state.search;
    },
    setConfig: (state) => {
      state.config = !state.config;
    },
    reset: (state) => {
      state.open = false;
      state.search = false;
      state.config = false;
      state.category = "";
      state.allCategories = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCategory,
  setOpen,
  setCategories,
  setSearch,
  setConfig,
  reset,
} = netflixSlice.actions;

export default netflixSlice.reducer;
