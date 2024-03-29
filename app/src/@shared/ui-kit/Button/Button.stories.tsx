import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Button/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Medium: Story = {
  args: {
    size: 'md',
    children: '검색하기',
    onClick: () => {
      /* pass */
    },
  },
};
