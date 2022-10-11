import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TemplateState {
  open: boolean;
  category: string;
  allCategories: any[];
}

const initialState: TemplateState = {
  open: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { setCategory, setOpen, setCategories } = netflixSlice.actions;

export default netflixSlice.reducer;
