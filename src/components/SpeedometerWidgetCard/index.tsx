import { ReactNode } from "react";
import { Card } from "../Card";
import { DropdownMenuOption } from "../DropdownMenu";
import { FooterAction } from "../FooterActions";
import { Speedometer } from "../Speedometer";

export type SpeedometerWidgetCardProps = {
  min?: number;
  max?: number;
  value: number;
  label: string;
  unit: string;
  children?: ReactNode;
  menuOptions?: DropdownMenuOption[];
  title: string;
  icon?: ReactNode;
  footerActions?: FooterAction[];
};

export const SpeedometerWidgetCard = ({
  min,
  max,
  value,
  label,
  unit,
  children,
  menuOptions,
  title,
  icon,
  footerActions,
}: SpeedometerWidgetCardProps) => {
  return (
    <Card
      className="w-80"
      title={title}
      icon={icon}
      menuOptions={menuOptions || []}
      footerActions={footerActions}
    >
      <div className="w-full">
        <div className="mb-3">
          <Speedometer
            min={min}
            max={max}
            value={value}
            label={label}
            unit={unit}
          />
        </div>
        {children}
      </div>
    </Card>
  );
};
