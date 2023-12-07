import { Skeleton } from './Skeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Skeleton/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    style: {
      width: 300,
      height: 100,
    },
  },
};
