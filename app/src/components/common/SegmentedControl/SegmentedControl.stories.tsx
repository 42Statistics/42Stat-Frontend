import type { Meta, StoryObj } from '@storybook/react';
import { createRef } from 'react';
import { SegmentedControl } from './SegmentedControl';

const meta = {
  title: 'Common/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    segments: [
      {
        label: '주간',
        value: 'weekly',
        ref: createRef<HTMLDivElement>(),
      },
      {
        label: '월간',
        value: 'monthly',
        ref: createRef<HTMLDivElement>(),
      },
      {
        label: '누적',
        value: 'total',
        ref: createRef<HTMLDivElement>(),
      },
    ],
    callback: (value: string, index: number) => {
      console.log(value, index);
    },
    defaultIndex: 0,
    controlRef: createRef<HTMLDivElement>(),
  },
};
