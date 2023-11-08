import React from "react";
import { Meta } from "@storybook/react";
import type { StoryObj } from "@storybook/react";

import RadioGroups from "./index";

const meta: Meta = {
  component: RadioGroups,
  title: "RadioGroups"
} satisfies Meta<typeof RadioGroups>;

export default meta;
type Story = StoryObj<typeof RadioGroups>;

export const Default: Story = {
  args: {
    name: 'test',
  },
  render: () => <RadioGroups name="test">
    <RadioGroups.Radio value="option1" label="Option 1" />
    <RadioGroups.Radio value="option2" label="Option 2" checked={true} />
  </RadioGroups>
};
