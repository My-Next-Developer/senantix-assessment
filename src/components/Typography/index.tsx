import classNames from "classnames";
import { ReactNode } from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "subtitle";

export type TypographyProps = {
  children?: ReactNode;
  variant?: TypographyVariant;
  className?: string;
};
export const Typography = ({
  variant,
  children,
  className,
}: TypographyProps) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={classNames("text-3xl font-bold", className)}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={classNames("text-2xl font-bold", className)}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={classNames("text-xl font-bold", className)}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={classNames("text-lg font-semibold", className)}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={classNames("text-base font-semibold", className)}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={classNames("text-sm font-semibold", className)}>
          {children}
        </h6>
      );
    case "subtitle":
      return (
        <div
          className={classNames(
            "text-xs font-normal text-secondary",
            className
          )}
        >
          {children}
        </div>
      );
    case "body":
    default:
      return (
        <div className={classNames("text-base font-normal", className)}>
          {children}
        </div>
      );
  }
};
