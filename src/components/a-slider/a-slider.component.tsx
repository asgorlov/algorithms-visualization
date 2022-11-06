import React, { FC, useCallback, useEffect, useState } from "react";
import { SliderSingleProps } from "antd/lib/slider";
import { InputNumber, Row, Slider } from "antd";

export interface ASliderProps extends Omit<SliderSingleProps, "style"> {
  styleRow?: React.CSSProperties;
  styleSlider?: React.CSSProperties;
  styleInputNumber?: React.CSSProperties;
}

const SIDE_MARGIN = "12px";

const ASlider: FC<ASliderProps> = React.forwardRef<HTMLElement, ASliderProps>(
  (
    {
      className = "",
      disabled,
      min = 0,
      max = 10,
      step = 1,
      defaultValue,
      value,
      onChange = () => {},
      styleRow = {},
      styleSlider = {},
      styleInputNumber = {},
      ...rest
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(
      typeof defaultValue === "number" ? defaultValue : 0
    );

    const handleChange = useCallback(
      (newValue: number | null) => {
        const sliderValue = typeof newValue === "number" ? newValue : 0;
        onChange(sliderValue);
        setInputValue(sliderValue);
      },
      [onChange]
    );

    useEffect(() => {
      if (typeof value === "number") {
        setInputValue(value);
      }
    }, [value]);

    return (
      <Row
        className={`${className}_row`}
        wrap={false}
        style={{ width: "100%", ...styleRow }}
      >
        <Slider
          ref={ref}
          className={`${className}_slider`}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
          value={inputValue}
          onChange={handleChange}
          style={{
            minWidth: "90px",
            marginRight: SIDE_MARGIN,
            marginLeft: SIDE_MARGIN,
            ...styleSlider
          }}
          {...rest}
        />
        <InputNumber
          className={`${className}_input-number`}
          disabled={disabled}
          min={min}
          max={max}
          step={typeof step === "number" ? step : 0}
          value={inputValue}
          onChange={handleChange}
          style={{ maxWidth: "74px", ...styleInputNumber }}
        />
      </Row>
    );
  }
);

export default ASlider;
