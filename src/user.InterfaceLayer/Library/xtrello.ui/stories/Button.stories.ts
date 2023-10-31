import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import Button from "../lib/Buttons";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    variant: "primary",
    onClick: () => console.log('Click button'),
    children: 'Click me'
  },
};
