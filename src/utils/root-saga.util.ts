import { all, delay, put, takeLatest } from "redux-saga/effects";
import {
  changeArrayElementsColor,
  resetArrayElementsColor,
  savedAlgorithmData,
  swapArrayElements
} from "../store/algorithm-view.slice";
import { StripModel } from "../models/strip.model";
import { RANDOM_SORT_TYPE } from "../constants/common.consts";
import {
  setShuffleButtonPushed,
  setSortButtonPushed
} from "../store/controls.slice";
import { SortTypes } from "../constants/sort-type.enum";
import { ArrayIndexToChangeModel } from "../models/array-index-to-change.model";
import shuffleSaga from "./shuffle-saga.util";
import bubbleSortSaga from "./bubble-sort-saga.util";

function* rootSaga() {
  yield all([
    takeLatest(RANDOM_SORT_TYPE, shuffleSaga),
    takeLatest(SortTypes.BUBBLE, bubbleSortSaga)
  ]);
}

// swap elements
export function* swap(
  array: StripModel[],
  indexesToChange: ArrayIndexToChangeModel,
  stepDelay: number
) {
  [array[indexesToChange.current], array[indexesToChange.selected]] = [
    array[indexesToChange.selected],
    array[indexesToChange.current]
  ];
  yield put(swapArrayElements(indexesToChange));
  yield delay(stepDelay);
}

// change color or reset color to default
export function* changeColor(
  indexesToChange: ArrayIndexToChangeModel,
  stepDelay: number,
  reset: boolean = false
) {
  const action = reset
    ? resetArrayElementsColor(indexesToChange)
    : changeArrayElementsColor(indexesToChange);
  yield put(action);
  yield delay(stepDelay);
}

// reset data after sort or shuffle action
export function* resetData(sort: boolean = true) {
  const action = sort
    ? setSortButtonPushed(false)
    : setShuffleButtonPushed(false);
  yield put(action);
  yield put(savedAlgorithmData(null));
}

export default rootSaga;
