import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_STRIP_ARRAY_LENGTH } from "../constants/common.consts";
import { initStripArray } from "../utils/algorithms.util";
import { RootState } from "./store";
import { StripModel } from "../models/strip.model";
import { ChangedStripArrayElementModel } from "../models/changed-strip-array-element.model";

export interface AlgorithmViewState {
  stripArray: StripModel[];
}

const initialState: AlgorithmViewState = {
  stripArray: initStripArray(DEFAULT_STRIP_ARRAY_LENGTH)
};

export const algorithmViewSlice = createSlice({
  name: "algorithmView",
  initialState: initialState,
  reducers: {
    changeStripArrayElements(
      state: AlgorithmViewState,
      action: PayloadAction<ChangedStripArrayElementModel[]>
    ) {
      const changedElements = action.payload;
      changedElements.forEach(changedElement => {
        state.stripArray[changedElement.index] = changedElement.element;
      });
    }
  }
});

export const selectStripArray = (state: RootState) => {
  return state.algorithmView.stripArray;
};

export const { changeStripArrayElements } = algorithmViewSlice.actions;

export default algorithmViewSlice.reducer;
