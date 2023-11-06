import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import RadioGroups from "./index";

const meta: Meta<typeof RadioGroups> = {
  component: RadioGroups,
  title: "RadioGroups"
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'test',
  },
  // render: () => <RadioGroups></RadioGroups>
};
