import React, { FC, useCallback } from "react";
import AlgorithmControlsComponent from "./algorithm-controls.component";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsSortSelected,
  setSelectedSort
} from "../../store/main-page.slice";
import {
  DEFAULT_SORT_STEP_DELAY_IN_SECONDS,
  DEFAULT_STRIP_ARRAY_LENGTH
} from "../../constants/common.consts";
import {
  selectArrayLength,
  selectShuffleButtonPushed,
  selectSortButtonPushed,
  selectStepDelay,
  setArrayLength,
  setShuffleButtonPushed,
  setSortButtonPushed,
  setStepDelay
} from "../../store/controls.slice";
import {
  createStripArray,
  savedAlgorithmData
} from "../../store/algorithm-view.slice";

const AlgorithmControlsContainer: FC = () => {
  const dispatch = useDispatch();

  const delay = useSelector(selectStepDelay);
  const length = useSelector(selectArrayLength);
  const isSortButtonPushed = useSelector(selectSortButtonPushed);
  const isShuffleButtonPushed = useSelector(selectShuffleButtonPushed);

  const handleClickReset = useCallback(() => {
    dispatch(setStepDelay(DEFAULT_SORT_STEP_DELAY_IN_SECONDS));
    dispatch(savedAlgorithmData(null));

    if (length !== DEFAULT_STRIP_ARRAY_LENGTH) {
      dispatch(setArrayLength(DEFAULT_STRIP_ARRAY_LENGTH));
    } else {
      dispatch(createStripArray(DEFAULT_STRIP_ARRAY_LENGTH));
    }
  }, [dispatch, length]);

  const handleClickBack = useCallback(() => {
    dispatch(setIsSortSelected(false));
    dispatch(setSelectedSort(null));
    dispatch(savedAlgorithmData(null));
    dispatch(setSortButtonPushed(false));
    dispatch(setShuffleButtonPushed(false));
  }, [dispatch]);

  const handleClickShuffle = useCallback(() => {
    dispatch(setShuffleButtonPushed(!isShuffleButtonPushed));
  }, [dispatch, isShuffleButtonPushed]);

  const handleClickSort = useCallback(() => {
    dispatch(setSortButtonPushed(!isSortButtonPushed));
  }, [dispatch, isSortButtonPushed]);

  const handleChangeLength = useCallback(
    (value: number) => {
      dispatch(setArrayLength(value));
    },
    [dispatch]
  );

  const handleChangeDelay = useCallback(
    (value: number) => {
      dispatch(setStepDelay(value));
    },
    [dispatch]
  );

  return (
    <AlgorithmControlsComponent
      onClickBack={handleClickBack}
      onClickReset={handleClickReset}
      isShuffleButtonPushed={isShuffleButtonPushed}
      onClickShuffle={handleClickShuffle}
      isSortButtonPushed={isSortButtonPushed}
      onClickSort={handleClickSort}
      sortArrayLength={length}
      onChangeLength={handleChangeLength}
      sortDelay={delay}
      onChangeDelay={handleChangeDelay}
    />
  );
};

export default AlgorithmControlsContainer;
