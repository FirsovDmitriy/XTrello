import type { Meta, StoryObj } from '@storybook/react';

import Switch from "./index";

const meta = {
  title: "Switches",
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const DisabledCheck: Story = {
  args: {
    disabled: true,
    checked: true
  }
}