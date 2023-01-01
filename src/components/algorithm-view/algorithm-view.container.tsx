import React, { FC, useEffect } from "react";
import AlgorithmViewComponent from "./algorithm-view.component";
import { useDispatch, useSelector } from "react-redux";
import {
  createArray,
  selectStripArray
} from "../../store/algorithm-view.slice";
import {
  selectArrayLength,
  selectShuffleButtonPushed,
  selectSortButtonPushed
} from "../../store/controls.slice";
import { RANDOM_SORT_ACTION } from "../../constants/common.consts";

const AlgorithmViewContainer: FC = () => {
  const dispatch = useDispatch();

  const stripArray = useSelector(selectStripArray);
  const stripArrayLength = useSelector(selectArrayLength);
  const isSortButtonPushed = useSelector(selectSortButtonPushed);
  const isShuffleButtonPushed = useSelector(selectShuffleButtonPushed);

  useEffect(() => {
    dispatch(createArray(stripArrayLength));
  }, [dispatch, stripArrayLength]);

  useEffect(() => {
    if (isShuffleButtonPushed) {
      dispatch({ type: RANDOM_SORT_ACTION });
    }
  }, [isShuffleButtonPushed, dispatch]);

  useEffect(() => {
    if (isSortButtonPushed) {
    }
  }, [isSortButtonPushed]);

  return <AlgorithmViewComponent stripArray={stripArray} />;
};

export default AlgorithmViewContainer;
