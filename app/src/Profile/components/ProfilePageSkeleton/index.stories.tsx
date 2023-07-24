import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePageSkeleton } from '.';

const meta = {
  title: 'Common/Skeleton/ProfilePageSkeleton',
  component: ProfilePageSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfilePageSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
