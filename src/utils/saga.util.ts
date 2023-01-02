import { all, delay, put, select, takeLatest } from "redux-saga/effects";
import {
  changeArrayElementsColor,
  resetArrayElementsColor,
  selectSavedAlgorithmData,
  selectStripArray,
  setSavedStripArrayIndex,
  swapArrayElements
} from "../store/algorithm-view.slice";
import { StripModel } from "../models/strip.model";
import {
  RANDOM_SORT_ACTION,
  SHUFFLE_DELAY_IN_MILLISECONDS
} from "../constants/common.consts";
import {
  selectShuffleButtonPushed,
  selectStepDelay,
  setShuffleButtonPushed,
  setSortButtonPushed
} from "../store/controls.slice";
import { SavedAlgorithmDataModel } from "../models/saved-algorithm-data.model";
import { ActionType } from "../constants/action-type.enum";
import { selectIsSortSelected } from "../store/main-page.slice";

function* rootSaga() {
  yield all([takeLatest(RANDOM_SORT_ACTION, shuffle)]);
}

function* shuffle() {
  const array: StripModel[] = yield select(selectStripArray);
  const savedData: SavedAlgorithmDataModel = yield select(
    selectSavedAlgorithmData
  );
  const stepDelay = SHUFFLE_DELAY_IN_MILLISECONDS / array.length;
  const initialIndex =
    savedData?.actionType === ActionType.SHUFFLE &&
    Number.isInteger(savedData.index)
      ? savedData.index
      : 0;

  for (let index = initialIndex; index < array.length; index++) {
    const isSortSelected: boolean = yield select(selectIsSortSelected);
    if (!isSortSelected) {
      // cancel from shuffle
      return;
    }

    const isLaunched: boolean = yield select(selectShuffleButtonPushed);
    if (!isLaunched) {
      // pause of shuffle
      yield put(
        setSavedStripArrayIndex({
          actionType: ActionType.SHUFFLE,
          index: index
        })
      );
      return;
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    const indexesToChange = { current: index, selected: randomIndex };

    yield put(swapArrayElements(indexesToChange));
    yield delay(stepDelay);
  }

  yield put(setSavedStripArrayIndex(null));
  yield put(setShuffleButtonPushed(false));
}

//toDo: Заготовка для будущих методов сортировки
function* bubbleSort() {
  const array: StripModel[] = yield select(selectStripArray);
  const stepDelay: number = yield select(selectStepDelay);

  for (let index = 0; index < array.length; index++) {
    const indexesToChange = { current: index, selected: 0 };
    // change color
    yield put(changeArrayElementsColor(indexesToChange));
    yield delay(stepDelay);
    // swap elements
    yield put(swapArrayElements(indexesToChange));
    yield delay(stepDelay);
    // reset color to default
    yield put(resetArrayElementsColor(indexesToChange));
    yield delay(stepDelay);
  }

  yield put(setSortButtonPushed(false));
}

export default rootSaga;
