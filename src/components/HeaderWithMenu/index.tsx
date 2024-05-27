import { ReactNode } from "react";
import { DropdownMenu, DropdownMenuOption } from "../DropdownMenu";
import { Typography } from "../Typography";

interface HeaderWithMenuProps {
  menuOptions: DropdownMenuOption[];
  title: string;
  icon?: ReactNode;
}

export const HeaderWithMenu = ({
  icon,
  title,
  menuOptions,
}: HeaderWithMenuProps) => {
  return (
    <div className="w-full overflow-hidden flex justify-between items-center">
      <div className="flex flex-1 gap-2 items-center overflow-hidden">
        {icon && (
          <div className="w-5 h-5 p-1 rounded-full shadow bg-white">{icon}</div>
        )}
        <div className="flex-1 font-semibold overflow-hidden">
          <Typography variant="h5" className="truncate">
            {title}
          </Typography>
        </div>
      </div>

      {menuOptions.length > 0 && <DropdownMenu options={menuOptions} />}
    </div>
  );
};
