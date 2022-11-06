import React, { FC, useCallback, useState } from "react";
import AlgorithmControlsComponent from "./algorithm-controls.component";
import { useDispatch, useSelector } from "react-redux";
import { setIsSortSelected } from "../../store/main-page.slice";
import {
  DEFAULT_SORT_STEP_DELAY,
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

const AlgorithmControlsContainer: FC = () => {
  const dispatch = useDispatch();

  const delay = useSelector(selectStepDelay);
  const length = useSelector(selectArrayLength);
  const isSortButtonPushed = useSelector(selectSortButtonPushed);
  const isShuffleButtonPushed = useSelector(selectShuffleButtonPushed);

  const handleClickBack = useCallback(() => {
    handleClickReset();
    dispatch(setIsSortSelected(false));
  }, [dispatch]);

  const handleClickReset = useCallback(() => {
    dispatch(setArrayLength(DEFAULT_STRIP_ARRAY_LENGTH));
    dispatch(setStepDelay(DEFAULT_SORT_STEP_DELAY));
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
