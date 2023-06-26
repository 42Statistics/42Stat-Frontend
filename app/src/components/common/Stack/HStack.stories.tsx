import type { Meta, StoryObj } from '@storybook/react';

import { HStack } from './HStack';

const meta = {
  title: 'Common/Stack/HStack',
  component: HStack,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof HStack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div style={{ width: 50, height: 50, background: 'blue' }} />
        <div style={{ width: 50, height: 50, background: 'blue' }} />
        <div style={{ width: 50, height: 50, background: 'blue' }} />
        <div style={{ width: 50, height: 50, background: 'blue' }} />
        <div style={{ width: 50, height: 50, background: 'blue' }} />
      </>
    ),
    spacing: '1rem',
  },
};
