import type { Meta, StoryObj } from '@storybook/react';

import Dropdowns from './index';

const meta = {
  title: 'Dropdowns',
  component: Dropdowns,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Dropdowns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true
  },
};

// export const LoggedOut: Story = {};
