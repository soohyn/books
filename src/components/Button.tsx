import type { ComponentProps } from "react";

type Variant = "primary" | "tertiary";

interface ButtonProps extends ComponentProps<"button"> {
  label: string;
  variant?: Variant;
}

const Button = ({
  label,
  variant = "primary",
  ...buttonProps
}: ButtonProps) => {
  return (
    <button className={`button button-${variant}`} {...buttonProps}>
      {label}
    </button>
  );
};

export default Button;
