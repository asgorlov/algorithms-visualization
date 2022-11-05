import React, { FC } from "react";
import { Button, ButtonProps } from "antd";

export interface AButtonProps extends ButtonProps {}

const AButton: FC<AButtonProps> = React.forwardRef<HTMLElement, AButtonProps>(
  (
    { type = "primary", loading = false, disabled = false, children, ...rest },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        type={type}
        loading={loading}
        disabled={disabled}
        {...rest}
      >
        {children}
      </Button>
    );
  }
);

export default AButton;
