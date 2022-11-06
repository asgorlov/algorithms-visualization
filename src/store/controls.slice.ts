import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  DEFAULT_SORT_STEP_DELAY,
  DEFAULT_STRIP_ARRAY_LENGTH
} from "../constants/common.consts";

export interface ControlsState {
  stepDelay: number;
  arrayLength: number;
  isSortButtonPushed: boolean;
  isShuffleButtonPushed: boolean;
}

const initialState: ControlsState = {
  stepDelay: DEFAULT_SORT_STEP_DELAY,
  arrayLength: DEFAULT_STRIP_ARRAY_LENGTH,
  isSortButtonPushed: false,
  isShuffleButtonPushed: false
};

export const controlsSlice = createSlice({
  name: "controls",
  initialState: initialState,
  reducers: {
    setStepDelay(state: ControlsState, action: PayloadAction<number>) {
      state.stepDelay = action.payload;
    },
    setArrayLength(state: ControlsState, action: PayloadAction<number>) {
      state.arrayLength = action.payload;
    },
    setSortButtonPushed(state: ControlsState, action: PayloadAction<boolean>) {
      state.isSortButtonPushed = action.payload;
    },
    setShuffleButtonPushed(
      state: ControlsState,
      action: PayloadAction<boolean>
    ) {
      state.isShuffleButtonPushed = action.payload;
    }
  }
});

export const selectStepDelay = (state: RootState) => {
  return state.controls.stepDelay;
};

export const selectArrayLength = (state: RootState) => {
  return state.controls.arrayLength;
};

export const selectSortButtonPushed = (state: RootState) => {
  return state.controls.isSortButtonPushed;
};

export const selectShuffleButtonPushed = (state: RootState) => {
  return state.controls.isShuffleButtonPushed;
};

export const {
  setStepDelay,
  setArrayLength,
  setSortButtonPushed,
  setShuffleButtonPushed
} = controlsSlice.actions;

export default controlsSlice.reducer;
