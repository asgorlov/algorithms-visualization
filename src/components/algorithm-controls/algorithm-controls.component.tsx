import React, { FC } from "react";
import AButton from "../a-button/a-button.component";
import ASlider from "../a-slider/a-slider.component";
import {
  ArrowLeftOutlined,
  CaretRightOutlined,
  PauseOutlined,
  RollbackOutlined,
  SwapOutlined
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Popover } from "antd";
import { DEFAULT_STRIP_ARRAY_LENGTH } from "../../constants/common.consts";

interface AlgorithmControlsProps {
  onClickBack: () => void;
  onClickReset: () => void;
  isShuffleButtonPushed: boolean;
  onClickShuffle: () => void;
  isSortButtonPushed: boolean;
  onClickSort: () => void;
  sortArrayLength: number;
  onChangeLength: (value: number) => void;
  sortDelay: number;
  onChangeDelay: (value: number) => void;
}

const AlgorithmControlsComponent: FC<AlgorithmControlsProps> = ({
  onClickBack,
  onClickReset,
  isShuffleButtonPushed,
  onClickShuffle,
  isSortButtonPushed,
  onClickSort,
  sortArrayLength,
  onChangeLength,
  sortDelay,
  onChangeDelay
}) => {
  const { t } = useTranslation();

  return (
    <div className="algorithm-controls">
      <div className="algorithm-controls__button-group">
        <Popover content={t<string>("button.back")}>
          <AButton
            className="algorithm-controls__button-group_back"
            onClick={onClickBack}
          >
            <ArrowLeftOutlined />
          </AButton>
        </Popover>
        <Popover content={t<string>("button.reset")}>
          <AButton
            className="algorithm-controls__button-group_reset"
            disabled={isShuffleButtonPushed || isSortButtonPushed}
            onClick={onClickReset}
          >
            <RollbackOutlined />
          </AButton>
        </Popover>
        <Popover content={t<string>("button.shuffle")}>
          <AButton
            className="algorithm-controls__button-group_shuffle"
            disabled={isSortButtonPushed}
            onClick={onClickShuffle}
          >
            {isShuffleButtonPushed ? (
              <PauseOutlined />
            ) : (
              <SwapOutlined rotate={90} />
            )}
          </AButton>
        </Popover>
        <Popover content={t<string>("button.sort")}>
          <AButton
            className="algorithm-controls__button-group_sort"
            disabled={isShuffleButtonPushed}
            onClick={onClickSort}
          >
            {isSortButtonPushed ? <PauseOutlined /> : <CaretRightOutlined />}
          </AButton>
        </Popover>
      </div>
      <div className="algorithm-controls__slider-group">
        <Popover content={t<string>("slider.length")}>
          <div className="algorithm-controls__slider-group_length">
            <ASlider
              className="algorithm-controls__slider-group_length"
              disabled={isShuffleButtonPushed || isSortButtonPushed}
              onChange={onChangeLength}
              value={sortArrayLength}
              min={DEFAULT_STRIP_ARRAY_LENGTH}
              max={100}
              step={10}
            />
          </div>
        </Popover>
        <Popover content={t<string>("slider.delay")}>
          <div className="algorithm-controls__slider-group_delay">
            <ASlider
              className="algorithm-controls__slider-group_delay"
              disabled={isShuffleButtonPushed || isSortButtonPushed}
              onChange={onChangeDelay}
              value={sortDelay}
              min={0.5}
              max={3}
              step={0.5}
            />
          </div>
        </Popover>
      </div>
    </div>
  );
};

export default AlgorithmControlsComponent;
