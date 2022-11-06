import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initStripArray } from "../utils/algorithms.util";
import { RootState } from "./store";
import { StripModel } from "../models/strip.model";

export interface AlgorithmViewState {
  stripArray: StripModel[];
}

const initialState: AlgorithmViewState = {
  stripArray: []
};

export const algorithmViewSlice = createSlice({
  name: "algorithmView",
  initialState: initialState,
  reducers: {
    createStripArray(state: AlgorithmViewState, action: PayloadAction<number>) {
      state.stripArray = initStripArray(action.payload);
    }
  }
});

export const selectStripArray = (state: RootState) => {
  return state.algorithmView.stripArray;
};

export const { createStripArray } = algorithmViewSlice.actions;

export default algorithmViewSlice.reducer;
