import type { Meta, StoryObj } from '@storybook/react';
import { HomePageSkeleton } from '.';

const meta = {
  title: 'Common/Skeleton/HomePageSkeleton',
  component: HomePageSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof HomePageSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
