import type { ComponentProps } from "react";

type Variant = "primary" | "tertiary";

interface ButtonProps extends ComponentProps<"button"> {
  label: string;
  variant?: Variant;
}

const Button = ({
  label,
  variant = "primary",
  className,
  ...buttonProps
}: ButtonProps) => {
  const baseClassName = `py-1 px-2.5 rounded-lg typo-caption`;
  const variantClassName = `${variant === "primary" ? "bg-palette-primary text-palette-white" : "bg-palette-lightgray text-text-secondary"}`;
  const buttonClassName = [baseClassName, variantClassName, className].join(
    " ",
  );

  return (
    <button className={buttonClassName} {...buttonProps}>
      {label}
    </button>
  );
};

export default Button;
