import { BoltIcon } from "@heroicons/react/16/solid";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      type: "string",
      description:
        "Style variant of the button - `primary`, `accent`, `outlined`, `text`, `destructive`",
      control: "select",
      options: ["primary", "accent", "outlined", "text", "destructive"],
    },
    size: {
      type: "string",
      description: "Size of the button - `sm`, `md`, `lg`",
      control: "select",
      options: ["sm", "md", "lg"],
    },
    type: {
      type: "string",
      control: "text",
      description: "HTML button `type` attribute",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithoutIcon: Story = {
  args: {
    variant: "primary",
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    children: "Button",
    icon: <BoltIcon className="size-3" />,
  },
};
