import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
export interface DropdownMenuOption {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface DropdownMenuProps {
  options: DropdownMenuOption[];
}

export const DropdownMenu = ({ options }: DropdownMenuProps) => {
  return (
    <Menu>
      <MenuButton className="px-2 py-1 rounded data-[hover]:bg-background data-[active]:bg-background">
        <EllipsisVerticalIcon className="size-4" />
      </MenuButton>
      <MenuItems anchor="bottom start" className="bg-white shadow rounded">
        {options.map((opt) => (
          <MenuItem key={opt.label}>
            <button
              className="px-3 py-2 text-sm block hover:bg-background"
              onClick={opt.onClick}
            >
              {opt.label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
