import React, { FC, useEffect } from "react";
import AlgorithmViewComponent from "./algorithm-view.component";
import { useDispatch, useSelector } from "react-redux";
import {
  createStripArray,
  selectStripArray
} from "../../store/algorithm-view.slice";
import {
  selectArrayLength,
  selectShuffleButtonPushed,
  selectSortButtonPushed
} from "../../store/controls.slice";
import { RANDOM_SORT_TYPE } from "../../constants/common.consts";
import { selectSelectedSort } from "../../store/main-page.slice";

const AlgorithmViewContainer: FC = () => {
  const dispatch = useDispatch();

  const stripArray = useSelector(selectStripArray);
  const selectedSort = useSelector(selectSelectedSort);
  const stripArrayLength = useSelector(selectArrayLength);
  const isSortButtonPushed = useSelector(selectSortButtonPushed);
  const isShuffleButtonPushed = useSelector(selectShuffleButtonPushed);

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

  return <AlgorithmViewComponent stripArray={stripArray} />;
};

export default AlgorithmViewContainer;
