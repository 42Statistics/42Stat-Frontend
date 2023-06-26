import type { Meta, StoryObj } from '@storybook/react';
import { ProfileEvalTabSkeleton } from '.';

const meta = {
  title: 'Common/Skeleton/ProfileEvalTabSkeleton',
  component: ProfileEvalTabSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof ProfileEvalTabSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
