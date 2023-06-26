import type { Meta, StoryObj } from '@storybook/react';

import { Center } from './Center';

const meta = {
  title: 'Common/Stack/Center',
  component: Center,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof Center>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div style={{ width: 50, height: 50, background: 'blue' }} />,
  },
};
