import { EvalLogLabel } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Label/EvalLogLabel',
  component: EvalLogLabel,
  tags: ['autodocs'],
} satisfies Meta<typeof EvalLogLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Positive: Story = {
  args: {
    type: 'positive',
    children: '125%',
  },
};

export const Neutral: Story = {
  args: {
    type: 'neutral',
    children: '80%',
  },
};

export const Negative: Story = {
  args: {
    type: 'negative',
    children: '0%',
  },
};

export const None: Story = {
  args: {
    type: 'none',
    children: '- / 5',
  },
};
