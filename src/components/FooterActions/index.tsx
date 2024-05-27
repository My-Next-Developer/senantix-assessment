import { ReactNode } from "react";
import { Button, ButtonSize, ButtonVariant } from "../Button";

export type FooterAction = {
  variant?: ButtonVariant;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
};

export type FooterActionsProps = {
  actions: FooterAction[];
  buttonSize?: ButtonSize;
};

export const FooterActions = ({ actions, buttonSize }: FooterActionsProps) => (
  <div className="flex justify-end items-center gap-2">
    {actions.map((action) => (
      <Button
        size={buttonSize}
        disabled={action.disabled}
        key={action.label}
        variant={action.variant}
        onClick={action.onClick}
        icon={action.icon}
      >
        {action.label}
      </Button>
    ))}
  </div>
);
