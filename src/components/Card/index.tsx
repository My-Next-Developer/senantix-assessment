import { ReactNode } from "react";
import { DropdownMenuOption } from "../DropdownMenu";
import { FooterAction, FooterActions } from "../FooterActions";
import { HeaderWithMenu } from "../HeaderWithMenu";
import cn from "classnames";

export type CardProps = {
  menuOptions: DropdownMenuOption[];
  title: string;
  icon?: ReactNode;
  children?: ReactNode;
  footerActions?: FooterAction[];
  className?: string;
};

export const Card = ({
  title,
  menuOptions,
  icon,
  children,
  footerActions,
  className,
}: CardProps) => {
  return (
    <div className={cn("rounded bg-white shadow", className)}>
      <div className="p-4">
        <HeaderWithMenu title={title} menuOptions={menuOptions} icon={icon} />
      </div>
      <div className="px-4 mb-4">{children}</div>
      {footerActions && footerActions.length > 0 && (
        <div className="border-t px-4 py-2">
          <FooterActions actions={footerActions} buttonSize="sm" />
        </div>
      )}
    </div>
  );
};
