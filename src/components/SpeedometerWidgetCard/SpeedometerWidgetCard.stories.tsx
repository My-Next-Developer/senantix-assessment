import { BoltIcon, CpuChipIcon } from "@heroicons/react/16/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { SpeedometerWidgetCard } from ".";
import { Typography } from "../Typography";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "SpeedometerWidgetCard",
  component: (props) => <SpeedometerWidgetCard {...props} />,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SpeedometerWidgetCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 80,
    label: "Usage",
    unit: "%",
    title: "App limits",
    icon: <CpuChipIcon />,
    menuOptions: [
      { label: "Option 1", onClick: () => window.alert("Option 1") },
      { label: "Option 2", onClick: () => window.alert("Option 2") },
    ],
    footerActions: [
      {
        label: "Upgrade plan",
        onClick: () => window.alert("Upgrade plan"),
        icon: <BoltIcon className="size-3" />,
      },
    ],
    children: (
      <div className="text-center">
        <Typography variant="h6">You've almost reached your limit</Typography>
        <Typography variant="subtitle">
          You have used 80% of your available spots.
        </Typography>
      </div>
    ),
  },
};
