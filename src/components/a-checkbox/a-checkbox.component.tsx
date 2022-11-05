import React, { forwardRef, useCallback, useState } from "react";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";
import { Checkbox } from "antd";
import clsx from "clsx";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface ACheckboxProps extends CheckboxProps {}

const ACheckbox = forwardRef<HTMLInputElement, ACheckboxProps>(
  ({ className = "", checked = false, onChange = () => {}, ...rest }, ref) => {
    const handleChange = useCallback(
      (event: CheckboxChangeEvent) => {
        checked = event.target.checked;
        onChange(event);
      },
      [onChange]
    );

    return (
      <Checkbox
        ref={ref}
        className={clsx("a-checkbox", className, { _bold: checked })}
        checked={checked}
        onChange={handleChange}
        {...rest}
      />
    );
  }
);

export default ACheckbox;
