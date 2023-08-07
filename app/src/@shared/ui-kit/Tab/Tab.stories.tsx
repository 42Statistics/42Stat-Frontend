import type { Meta, StoryObj } from '@storybook/react';

import { Tab } from '.';

const meta = {
  title: 'Common/Tab/Tab',
  component: Tab,
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: false,
    link: '',
    children: '일반',
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    link: '',
    children: '일반',
  },
};
