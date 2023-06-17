import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta = {
  title: 'Common/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imgUrl: 'https://avatars.githubusercontent.com/u/69245613?v=4',
  },
};

export const Null: Story = {
  args: {
    imgUrl: null,
  },
};
