import type { Meta, StoryObj } from '@storybook/react';

import { Tab, TabList } from '.';
import { Text } from '../Text';

const meta = {
  title: 'Common/Tab/TabList',
  component: TabList,
  tags: ['autodocs'],
} satisfies Meta<typeof TabList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TabList>
      <Tab selected>
        <Text>일반</Text>
      </Tab>
      <Tab>
        <Text>평가</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
    </TabList>
  ),
};

export const ManyTabs: Story = {
  render: () => (
    <TabList>
      <Tab selected>
        <Text>일반</Text>
      </Tab>
      <Tab>
        <Text>평가</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
      <Tab>
        <Text>라이벌</Text>
      </Tab>
    </TabList>
  ),
};
