import { CpuChipIcon } from "@heroicons/react/16/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { HeaderWithMenu } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "HeaderWithMenu",
  component: (props) => (
    <div className="w-80 border">
      <HeaderWithMenu {...props} />
    </div>
  ),
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof HeaderWithMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithIcon: Story = {
  args: {
    icon: <CpuChipIcon />,
    title: "Title",
    menuOptions: [
      { label: "Option 1", onClick: () => window.alert("Option 1") },
      { label: "Option 2", onClick: () => window.alert("Option 2") },
    ],
  },
};

export const WithoutIcon: Story = {
  args: {
    title: "Title",
    menuOptions: [
      { label: "Option 1", onClick: () => window.alert("Option 1") },
      { label: "Option 2", onClick: () => window.alert("Option 2") },
    ],
  },
};
