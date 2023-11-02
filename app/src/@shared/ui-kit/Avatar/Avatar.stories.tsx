import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta = {
  title: 'Common/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/69245613?v=4',
    name: 'yopark',
    alt: 'avatar',
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    name: 'yopark',
    src: 'https://avatars.githubusercontent.com/u/69245613?v=4',
    alt: 'avatar',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    name: 'yopark',
    src: 'https://avatars.githubusercontent.com/u/69245613?v=4',
    alt: 'avatar',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    name: 'yopark',
    src: 'https://avatars.githubusercontent.com/u/69245613?v=4',
    alt: 'avatar',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    name: 'yopark',
    src: 'https://avatars.githubusercontent.com/u/69245613?v=4',
    alt: 'avatar',
  },
};

export const Null: Story = {
  args: {
    src: null,
    name: 'yopark',
    alt: 'avatar',
  },
};
