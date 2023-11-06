import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import Button from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Buttons'
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    variant: "primary",
    onClick: () => alert('Click!'),
    children: 'Primary'
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
}

export const Square: Story = {
  args: {
    variant: 'square',
    children: '||'
  }
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link'
  }
}