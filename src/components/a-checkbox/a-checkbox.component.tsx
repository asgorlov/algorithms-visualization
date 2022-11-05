import React, { forwardRef } from "react";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { Checkbox } from "antd";
import clsx from "clsx";

interface ACheckboxProps extends CheckboxProps {}

const ACheckbox = forwardRef<HTMLInputElement, ACheckboxProps>(
  ({ className = "", ...rest }, ref) => {
    return (
      <Checkbox ref={ref} className={clsx("a-checkbox", className)} {...rest} />
    );
  }
);

export default ACheckbox;
