import { StripModel } from "../models/strip.model";
import { put, select } from "redux-saga/effects";
import {
  savedAlgorithmData,
  selectSavedAlgorithmData,
  selectStripArray
} from "../store/algorithm-view.slice";
import {
  selectSortButtonPushed,
  selectStepDelay
} from "../store/controls.slice";
import { SavedAlgorithmDataModel } from "../models/saved-algorithm-data.model";
import { ActionType } from "../constants/action-type.enum";
import { selectIsSortSelected } from "../store/main-page.slice";
import { changeColor, resetData, swap } from "./root-saga.util";

function* bubbleSortSaga() {
  const array: StripModel[] = Array.from(yield select(selectStripArray));
  const chosenDelay: number = yield select(selectStepDelay);
  const savedData: SavedAlgorithmDataModel = yield select(
    selectSavedAlgorithmData
  );
  const stepDelay = Math.round((chosenDelay * 1000) / 3);
  const savedI =
    savedData?.action === ActionType.BUBBLE_SORT ? savedData.indexes[0] : 0;
  let savedJ =
    savedData?.action === ActionType.BUBBLE_SORT ? savedData.indexes[1] : 0;

  for (let i = savedI; i < array.length; i++) {
    let isArraySorted = true;
    let isNotCancelled = true;
    for (let j = savedJ; j < array.length - i - 1; j++) {
      // exit from second sort loop
      isNotCancelled = yield select(selectIsSortSelected);
      if (!isNotCancelled) {
        break;
      }
      // pause of sorting
      const isLaunched: boolean = yield select(selectSortButtonPushed);
      if (!isLaunched) {
        yield put(
          savedAlgorithmData({
            action: ActionType.BUBBLE_SORT,
            indexes: [i, j]
          })
        );
        return;
      }
      // visualization of one iteration
      const indexesToChange = { current: j, selected: j + 1 };
      yield changeColor(indexesToChange, stepDelay);
      // if current height is more than selected height, we will swap elements
      if (array[j].height > array[j + 1].height) {
        isArraySorted = false;
        yield swap(array, indexesToChange, stepDelay);
      }
      yield changeColor(indexesToChange, stepDelay, true);
    }
    // if array is sorted or cancelled, we will skip sort
    if (isArraySorted || !isNotCancelled) {
      break;
    }
    // reset saved initial value of second cycle
    savedJ = 0;
  }
  yield resetData();
}

export default bubbleSortSaga;
