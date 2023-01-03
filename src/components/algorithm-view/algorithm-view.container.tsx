import React, { FC, useEffect, useMemo } from "react";
import AlgorithmViewComponent from "./algorithm-view.component";
import { useDispatch, useSelector } from "react-redux";
import {
  createStripArray,
  selectStripArray
} from "../../store/algorithm-view.slice";
import {
  selectArrayLength,
  selectShuffleButtonPushed,
  selectSortButtonPushed,
  selectStepDelay
} from "../../store/controls.slice";
import {
  DEFAULT_SORT_STEP_DELAY_IN_SECONDS,
  RANDOM_SORT_TYPE,
  SHUFFLE_DELAY_IN_SECONDS
} from "../../constants/common.consts";
import { selectSelectedSort } from "../../store/main-page.slice";

const AlgorithmViewContainer: FC = () => {
  const dispatch = useDispatch();

  const stepDelay = useSelector(selectStepDelay);
  const stripArray = useSelector(selectStripArray);
  const selectedSort = useSelector(selectSelectedSort);
  const stripArrayLength = useSelector(selectArrayLength);
  const isSortButtonPushed = useSelector(selectSortButtonPushed);
  const isShuffleButtonPushed = useSelector(selectShuffleButtonPushed);

  const animationTime = useMemo(() => {
    if (isShuffleButtonPushed) {
      // transition = 0,2s
      return SHUFFLE_DELAY_IN_SECONDS / 5;
    } else if (isSortButtonPushed) {
      // transition = chosen delay
      return stepDelay;
    } else {
      // transition = default sort step delay
      return DEFAULT_SORT_STEP_DELAY_IN_SECONDS;
    }
  }, [isShuffleButtonPushed, isSortButtonPushed, stepDelay]);

  useEffect(() => {
    dispatch(createStripArray(stripArrayLength));
  }, [dispatch, stripArrayLength]);

  useEffect(() => {
    if (isShuffleButtonPushed) {
      // calling shuffle method in saga
      dispatch({ type: RANDOM_SORT_TYPE });
    }
  }, [isShuffleButtonPushed, dispatch]);

  useEffect(() => {
    if (isSortButtonPushed) {
      // calling selected sort method in saga
      dispatch({ type: selectedSort });
    }
  }, [isSortButtonPushed, dispatch, selectedSort]);

  return (
    <AlgorithmViewComponent
      stripArray={stripArray}
      selectedSort={selectedSort}
      animationTime={animationTime}
    />
  );
};

export default AlgorithmViewContainer;
