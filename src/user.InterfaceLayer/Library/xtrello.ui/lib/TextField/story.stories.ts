import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import TextField from "./index";

const meta = {
  title: "TextField",
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Введите текст...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Введите текст...',
    disabled: true
  },
};
