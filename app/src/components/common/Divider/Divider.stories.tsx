import type { Meta, StoryObj } from '@storybook/react';

import { HStack } from '../Stack';
import { Divider } from './Divider';

const meta = {
  title: 'Common/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => <Divider />,
};

export const HorizontalWithVstack: Story = {
  render: () => (
    <HStack w="100%">
      <Divider />
    </HStack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ height: 300 }}>
      <Divider orientation="vertical" />
    </div>
  ),
};

export const VerticalWithHstack: Story = {
  render: () => (
    <HStack h="300px">
      <Divider orientation="vertical" />
    </HStack>
  ),
};

export const Thick: Story = {
  render: () => <Divider thickness="3px" />,
};

export const Red: Story = {
  render: () => <Divider color="red" />,
};
