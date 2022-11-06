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

const AlgorithmViewContainer: FC = () => {
  const dispatch = useDispatch();

  const stripArray = useSelector(selectStripArray);
  const stripArrayLength = useSelector(selectArrayLength);
  const isSortButtonPushed = useSelector(selectSortButtonPushed);
  const isShuffleButtonPushed = useSelector(selectShuffleButtonPushed);

  useEffect(() => {
    dispatch(createStripArray(stripArrayLength));
  }, [dispatch, stripArrayLength]);

  useEffect(() => {
    if (isShuffleButtonPushed) {
    }
  }, [isShuffleButtonPushed, stripArray]);

  useEffect(() => {
    if (isSortButtonPushed) {
    }
  }, [isSortButtonPushed]);

  return <AlgorithmViewComponent stripArray={stripArray} />;
};

export default AlgorithmViewContainer;
