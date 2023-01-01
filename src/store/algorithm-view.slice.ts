import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initStripArray } from "../utils/algorithms.util";
import { RootState } from "./store";
import { StripModel } from "../models/strip.model";
import { StripTypeClass } from "../constants/strip-type.enum";
import { ArrayIndexesToChangeModel } from "../models/array-indexes-to-change.model";

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
    changeArrayElementsColor: (
      state: AlgorithmViewState,
      action: PayloadAction<ArrayIndexesToChangeModel>
    ) => {
      const array = state.stripArray;
      const currentIndex = action.payload.current;
      const selectedIndex = action.payload.selected;

      array[currentIndex].typeClass = StripTypeClass.CURRENT;
      array[selectedIndex].typeClass = StripTypeClass.SELECTED;
    },
    resetArrayElementsColor: (
      state: AlgorithmViewState,
      action: PayloadAction<ArrayIndexesToChangeModel>
    ) => {
      const array = state.stripArray;
      const currentIndex = action.payload.current;
      const selectedIndex = action.payload.selected;

      array[currentIndex].typeClass = StripTypeClass.DEFAULT;
      array[selectedIndex].typeClass = StripTypeClass.DEFAULT;
    },
    swapArrayElements: (
      state: AlgorithmViewState,
      action: PayloadAction<ArrayIndexesToChangeModel>
    ) => {
      const array = state.stripArray;
      const currentIndex = action.payload.current;
      const selectedIndex = action.payload.selected;
      // swap colors
      [array[currentIndex].typeClass, array[selectedIndex].typeClass] = [
        array[selectedIndex].typeClass,
        array[currentIndex].typeClass
      ];
      // swap elements
      [array[currentIndex], array[selectedIndex]] = [
        array[selectedIndex],
        array[currentIndex]
      ];
    },
    createArray(state: AlgorithmViewState, action: PayloadAction<number>) {
      state.stripArray = initStripArray(action.payload);
    }
  }
});

export const selectStripArray = (state: RootState) => {
  return state.algorithmView.stripArray;
};

export const {
  changeArrayElementsColor,
  resetArrayElementsColor,
  swapArrayElements,
  createArray
} = algorithmViewSlice.actions;

export default algorithmViewSlice.reducer;
