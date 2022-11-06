import React, { FC } from "react";
import { StripTypeClass } from "../../../constants/strip-type.enum";
import clsx from "clsx";

interface StripProps {
  height?: number;
  typeClass?: StripTypeClass;
  className?: string;
}

const StripComponent: FC<StripProps> = ({ height, typeClass, className }) => {
  return (
    <div
      className={clsx(className, typeClass)}
      style={{ height: `${height}%`, width: "100%" }}
    ></div>
  );
};

export default StripComponent;
