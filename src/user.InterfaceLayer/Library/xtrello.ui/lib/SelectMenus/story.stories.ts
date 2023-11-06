import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import SelectMenus from "./index";
import { options } from "./mock";

const meta = {
  title: "SelectMenus",
  component: SelectMenus,
} satisfies Meta<typeof SelectMenus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select item',
    options: options
  },
};
