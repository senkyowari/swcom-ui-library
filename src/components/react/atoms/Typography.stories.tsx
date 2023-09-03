import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

// https://storybook.js.org/docs/react/api/csf
export const Primary: Story = {
  render: () => <Typography>hello!</Typography>,
};
