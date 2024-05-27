import { CpuChipIcon } from "@heroicons/react/16/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Card",
  component: (props) => (
    <div className="w-80">
      <Card {...props} />
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    footerActions: {
      disabled: true,
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    icon: <CpuChipIcon />,
    title: "Title",
    menuOptions: [
      { label: "Option 1", onClick: () => window.alert("Option 1") },
      { label: "Option 2", onClick: () => window.alert("Option 2") },
    ],
    footerActions: [
      {
        label: "Cancel",
        variant: "text",
        onClick: () => window.alert("Cancel"),
      },
      { label: "Save", onClick: () => window.alert("Save") },
    ],
    children: "Some content",
  },
};
