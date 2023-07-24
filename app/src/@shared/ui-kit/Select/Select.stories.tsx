import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Common/Select',
  component: Select,
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select style={{ width: 150 }}>
      <option>한식</option>
      <option>양식</option>
      <option>중식</option>
      <option>일식</option>
    </Select>
  ),
};
