import { CSSProperties, MouseEvent, ReactNode } from "react";
import { Button as HeadlessButton } from "@headlessui/react";
import classNames from "classnames";

export type ButtonVariant =
  | "primary"
  | "accent"
  | "destructive"
  | "outlined"
  | "text";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit" | "reset";
  size?: ButtonSize;
  children?: ReactNode;
  icon?: ReactNode;
};

const getVariantColorClassName = (variant: ButtonVariant) => {
  switch (variant) {
    case "outlined":
      return `bg-transparent data-[hover]:bg-background data-[active]:bg-background text-primary border-border border`;
    case "text":
      return `bg-transparent data-[hover]:bg-background data-[active]:bg-background text-primary`;
    case "accent":
      return "bg-accent text-accent-foreground data-[hover]:bg-accent-hover data-[active]:bg-accent-hover";
    case "destructive":
      return "bg-destructive text-destructive-foreground data-[hover]:bg-destructive-hover data-[active]:bg-destructive-hover";
    case "primary":
    default:
      return "bg-primary data-[hover]:bg-primary-hover font-medium data-[active]:bg-primary-hover text-primary-foreground";
  }
};

const getSizeClassName = (size: ButtonSize) => {
  switch (size) {
    case "lg":
      return "rounded-lg px-4 py-3 text-base";
    case "sm":
      return "rounded-sm px-2 py-1 text-sm";
    case "md":
    default:
      return "rounded px-3 py-2 text-sm";
  }
};

export const Button = ({
  type = "button",
  className,
  style,
  onClick,
  disabled,
  children,
  variant = "primary",
  size = "md",
  icon,
}: ButtonProps) => {
  const variantColorClassName = getVariantColorClassName(variant);
  const sizeClassName = getSizeClassName(size);

  return (
    <HeadlessButton
      type={type}
      className={classNames(
        variantColorClassName,
        sizeClassName,
        className,
        "data-[active]:shadow data-[active]:outline data-[active]:outline-accent"
      )}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {icon ? (
        <div className="flex gap-1.5 items-center justify-center">
          {icon} {children}
        </div>
      ) : (
        children
      )}
    </HeadlessButton>
  );
};
