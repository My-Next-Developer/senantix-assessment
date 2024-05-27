import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Typography",
  component: Typography,
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
        "Style variant of the button - `h1` | `h2` | `h3` | `h4` | `h5` | `h6` | `body` | `subtitle`",
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body", "subtitle"],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const H1: Story = {
  args: {
    variant: "h1",
    children: "Test H1 Typography",
  },
};
export const H2: Story = {
  args: {
    variant: "h2",
    children: "Test H2 Typography",
  },
};
export const H3: Story = {
  args: {
    variant: "h3",
    children: "Test H3 Typography",
  },
};
export const H4: Story = {
  args: {
    variant: "h4",
    children: "Test H4 Typography",
  },
};
export const H5: Story = {
  args: {
    variant: "h5",
    children: "Test H5 Typography",
  },
};
export const H6: Story = {
  args: {
    variant: "h6",
    children: "Test H6 Typography",
  },
};
export const Body: Story = {
  args: {
    variant: "body",
    children: "Test body Typography",
  },
};
export const Subtitle: Story = {
  args: {
    variant: "subtitle",
    children: "Test subtitle Typography",
  },
};
