import { all, delay, put, select, takeEvery } from "redux-saga/effects";
import {
  changeArrayElementsColor,
  resetArrayElementsColor,
  selectStripArray,
  swapArrayElements
} from "../store/algorithm-view.slice";
import { StripModel } from "../models/strip.model";
import {
  RANDOM_SORT_ACTION,
  SHUFFLE_DELAY_IN_MILLISECONDS
} from "../constants/common.consts";
import {
  selectStepDelay,
  setShuffleButtonPushed,
  setSortButtonPushed
} from "../store/controls.slice";

function* rootSaga() {
  yield all([takeEvery(RANDOM_SORT_ACTION, shuffle)]);
}

export function* shuffle() {
  const array: StripModel[] = yield select(selectStripArray);
  const stepDelay = SHUFFLE_DELAY_IN_MILLISECONDS / array.length;

  for (let index = 0; index < array.length; index++) {
    const randomIndex = Math.floor(Math.random() * array.length);
    const indexesToChange = { current: index, selected: randomIndex };

    yield put(swapArrayElements(indexesToChange));
    yield delay(stepDelay);
  }

  yield put(setShuffleButtonPushed(false));
}

//toDo: Заготовка для будущих методов сортировки
export function* bubbleSort() {
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
