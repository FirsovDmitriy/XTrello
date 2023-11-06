import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import Textarea from "./index";

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Textarea'
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    placeholder: 'Введите текст...'
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Ваш комментарий',
    disabled: true
  },
};
