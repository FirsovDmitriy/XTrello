import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import Tag from "./index";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Tag'
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    children: 'Черновик'
  },
};

export const BackgroundColor: Story = {
  args: {
    children: 'Черновик',
    bgColor: 'gray'
  },
};
