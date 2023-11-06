import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import Typography from "./index";

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Typography'
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Text: Story = {
  args: {
    variant: "h1",
    children: 'Текст, текст'
  },
};

export const SomethingColor: Story = {
  args: {
    variant: 'p',
    children: 'Текст, текст',
    $color: 'green'
  }
}

export const Size: Story = {
  args: {
    variant: 'p',
    children: 'Текст, текст',
    $fontSize: '20px'
  }
}