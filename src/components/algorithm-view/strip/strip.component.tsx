import React, { FC } from "react";
import { StripTypeClass } from "../../../constants/strip-type.enum";
import clsx from "clsx";
import { AnimationTimeModel } from "../../../models/animation-time.model";
import { MAX_HEIGHT_STRIP } from "../../../constants/common.consts";

interface StripProps {
  height?: number;
  typeClass?: StripTypeClass;
  className?: string;
  animationTime: AnimationTimeModel;
}

const StripComponent: FC<StripProps> = ({
  height = MAX_HEIGHT_STRIP,
  typeClass,
  className,
  animationTime = { heightTime: "0", backgroundTime: "0" }
}) => {
  return (
    <div
      className={clsx(className, typeClass)}
      style={{
        height: `${height}%`,
        width: "100%",
        transition: `height ${animationTime.heightTime}s, background ${animationTime.backgroundTime}s`
      }}
    ></div>
  );
};

export default StripComponent;
