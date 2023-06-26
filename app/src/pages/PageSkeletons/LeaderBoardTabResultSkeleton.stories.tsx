import type { Meta, StoryObj } from '@storybook/react';
import { LeaderBoardTabResultSkeleton } from './LeaderBoardTabResultSkeleton';

const meta = {
  title: 'Common/Skeleton/LeaderBoardTabResultSkeleton',
  component: LeaderBoardTabResultSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof LeaderBoardTabResultSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
