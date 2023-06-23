import type { Meta, StoryObj } from '@storybook/react';

import { StartButton } from './StartButton';

const meta = {
  title: 'Common/StartButton',
  component: StartButton,
  tags: ['autodocs'],
} satisfies Meta<typeof StartButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '👺 지금 시작 안하기',
    onClick: () => {
      /* pass */
    },
  },
};
