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
      // whole shuffle process should not last more than 2s
      const animationTime = SHUFFLE_DELAY_IN_SECONDS / stripArray.length;
      return {
        heightTime: Number(animationTime).toFixed(2),
        backgroundTime: "0"
      };
    } else if (isSortButtonPushed) {
      // transition of one iteration = chosen delay
      return {
        heightTime: Number(stepDelay / 3).toFixed(1),
        backgroundTime: Number((stepDelay * 2) / 3).toFixed(1)
      };
    } else {
      // transition of one iteration = default sort step delay
      return {
        heightTime: Number(DEFAULT_SORT_STEP_DELAY_IN_SECONDS / 3).toFixed(1),
        backgroundTime: Number(
          (DEFAULT_SORT_STEP_DELAY_IN_SECONDS * 2) / 3
        ).toFixed(1)
      };
    }
  }, [isShuffleButtonPushed, stripArray, isSortButtonPushed, stepDelay]);

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
