import React, { FC, useCallback } from "react";
import MainPageComponent from "./main-page.component";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSortSelected,
  selectSelectedSort,
  setIsSortSelected,
  setSelectedSort
} from "../../store/main-page.slice";

const MainPageContainer: FC = () => {
  const dispatch = useDispatch();
  const selectedSort = useSelector(selectSelectedSort);
  const isSortSelected = useSelector(selectIsSortSelected);

  const handleChangeCheckbox = useCallback(
    (e: CheckboxChangeEvent) => {
      dispatch(setSelectedSort(e.target.checked ? e.target.value : null));
    },
    [dispatch]
  );

  const handleClickReset = useCallback(() => {
    dispatch(setSelectedSort(null));
  }, [dispatch]);

  const handleClickSubmit = useCallback(() => {
    dispatch(setIsSortSelected(true));
  }, [dispatch]);

  return (
    <MainPageComponent
      isSortSelected={isSortSelected}
      selectedSort={selectedSort}
      onChangeCheckbox={handleChangeCheckbox}
      onClickReset={handleClickReset}
      onClickSubmit={handleClickSubmit}
    />
  );
};

export default MainPageContainer;
