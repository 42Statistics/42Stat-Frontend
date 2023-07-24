import type { Meta, StoryObj } from '@storybook/react';
import { LeaderboardTabResultSkeleton } from '.';

const meta = {
  title: 'Common/Skeleton/LeaderBoardTabResultSkeleton',
  component: LeaderboardTabResultSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof LeaderboardTabResultSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
