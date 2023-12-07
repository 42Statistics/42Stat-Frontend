import { Loader } from './Loader';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
