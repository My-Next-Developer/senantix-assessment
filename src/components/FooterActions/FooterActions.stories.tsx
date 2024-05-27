import type { Meta, StoryObj } from "@storybook/react";
import { FooterActions } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "FooterActions",
  component: (props) => (
    <div className="w-80 border">
      <FooterActions {...props} />
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
    buttonSize: {
      type: "string",
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof FooterActions>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    actions: [
      {
        label: "Option 1",
        onClick: () => window.alert("Cancel"),
        variant: "text",
      },
      { label: "Option 2", onClick: () => window.alert("Option 2") },
    ],
    buttonSize: "sm",
  },
};
