import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { SortType } from "../constants/sort-type.enum";

export interface MainPageState {
  selectedSort: SortType | null;
  isSortSelected: boolean;
}

const initialState: MainPageState = {
  selectedSort: null,
  isSortSelected: false
};

export const mainPageSlice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    setSelectedSort(state: MainPageState, action: PayloadAction<SortType>) {
      state.selectedSort = action.payload;
    },
    setIsSortSelected(state: MainPageState, action: PayloadAction<boolean>) {
      state.isSortSelected = action.payload;
    }
  }
});

export const selectSelectedSort = (state: RootState) => {
  return state.mainPage.selectedSort;
};

export const selectIsSortSelected = (state: RootState) => {
  return state.mainPage.isSortSelected;
};

export const { setSelectedSort, setIsSortSelected } = mainPageSlice.actions;

export default mainPageSlice.reducer;
