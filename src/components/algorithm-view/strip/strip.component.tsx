import React, { FC } from "react";
import { StripTypeClass } from "../../../constants/strip-type.enum";
import clsx from "clsx";
import {
  DEFAULT_SORT_STEP_DELAY_IN_SECONDS,
  MAX_HEIGHT_STRIP
} from "../../../constants/common.consts";

interface StripProps {
  height?: number;
  typeClass?: StripTypeClass;
  className?: string;
  animationTime?: number;
}

const StripComponent: FC<StripProps> = ({
  height = MAX_HEIGHT_STRIP,
  typeClass,
  className,
  animationTime = DEFAULT_SORT_STEP_DELAY_IN_SECONDS
}) => {
  return (
    <div
      className={clsx(className, typeClass)}
      style={{
        height: `${height}%`,
        width: "100%",
        transition: `${animationTime}s`
      }}
    ></div>
  );
};

export default StripComponent;
