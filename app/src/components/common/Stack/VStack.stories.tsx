import type { Meta, StoryObj } from '@storybook/react';

import { VStack } from './VStack';

const meta = {
  title: 'Common/Stack/VStack',
  component: VStack,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof VStack>;

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
