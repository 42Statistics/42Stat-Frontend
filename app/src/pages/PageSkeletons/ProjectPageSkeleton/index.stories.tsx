import type { Meta, StoryObj } from '@storybook/react';
import { ProjectPageSkeleton } from '.';

const meta = {
  title: 'Common/Skeleton/ProjectPageSkeleton',
  component: ProjectPageSkeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectPageSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
