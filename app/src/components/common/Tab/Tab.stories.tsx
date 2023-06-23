import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabList } from '.';
import { Text } from '../Text';

const meta = {
  title: 'Common/Tab/Tab',
  component: Tab,
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TabList>
      <Tab>
        <Text>일반</Text>
      </Tab>
    </TabList>
  ),
};

export const Selected: Story = {
  render: () => (
    <TabList>
      <Tab selected>
        <Text>일반</Text>
      </Tab>
    </TabList>
  ),
};
