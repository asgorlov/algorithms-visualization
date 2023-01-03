import { SavedAlgorithmDataModel } from "../models/saved-algorithm-data.model";
import { put, select } from "redux-saga/effects";
import {
  savedAlgorithmData,
  selectSavedAlgorithmData,
  selectStripArray
} from "../store/algorithm-view.slice";
import { StripModel } from "../models/strip.model";
import { SHUFFLE_DELAY_IN_SECONDS } from "../constants/common.consts";
import { ActionType } from "../constants/action-type.enum";
import { selectIsSortSelected } from "../store/main-page.slice";
import { selectShuffleButtonPushed } from "../store/controls.slice";
import { resetData, swap } from "./root-saga.util";

function* shuffleSaga() {
  const savedData: SavedAlgorithmDataModel = yield select(
    selectSavedAlgorithmData
  );
  const array: StripModel[] = Array.from(yield select(selectStripArray));
  const stepDelay = (SHUFFLE_DELAY_IN_SECONDS * 1000) / array.length;
  const savedI =
    savedData?.action === ActionType.SHUFFLE ? savedData.indexes[0] : 0;

  for (let i = savedI; i < array.length; i++) {
    // exit from shuffle loop
    const isNotCancelled: boolean = yield select(selectIsSortSelected);
    if (!isNotCancelled) {
      break;
    }
    // pause of shuffle
    const isLaunched: boolean = yield select(selectShuffleButtonPushed);
    if (!isLaunched) {
      yield put(
        savedAlgorithmData({
          action: ActionType.SHUFFLE,
          indexes: [i]
        })
      );
      return;
    }
    // swap elements
    const randomI = Math.floor(Math.random() * array.length);
    const indexesToChange = { current: i, selected: randomI };
    yield swap(array, indexesToChange, stepDelay);
  }
  yield resetData(false);
}

export default shuffleSaga;
