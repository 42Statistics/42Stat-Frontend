import { Tab, Tabs } from '.';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Common/Tab/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Tab key="general" selected link="">
        일반
      </Tab>,
      <Tab key="eval" link="">
        평가
      </Tab>,
    ],
  },
};

export const ManyTabs: Story = {
  args: {
    children: [
      <Tab key={1} selected link="">
        일반
      </Tab>,
      <Tab key={2} link="">
        일반
      </Tab>,
      <Tab key={3} link="">
        일반
      </Tab>,
      <Tab key={4} link="">
        일반
      </Tab>,
      <Tab key={5} link="">
        일반
      </Tab>,
      <Tab key={6} link="">
        일반
      </Tab>,
      <Tab key={7} link="">
        일반
      </Tab>,
      <Tab key={8} link="">
        일반
      </Tab>,
      <Tab key={9} link="">
        일반
      </Tab>,
      <Tab key={10} link="">
        일반
      </Tab>,
      <Tab key={11} link="">
        일반
      </Tab>,
      <Tab key={12} link="">
        일반
      </Tab>,
      <Tab key={13} link="">
        일반
      </Tab>,
      <Tab key={14} link="">
        일반
      </Tab>,
      <Tab key={15} link="">
        일반
      </Tab>,
      <Tab key={16} link="">
        일반
      </Tab>,
      <Tab key={17} link="">
        일반
      </Tab>,
      <Tab key={18} link="">
        일반
      </Tab>,
      <Tab key={19} link="">
        일반
      </Tab>,
      <Tab key={20} link="">
        일반
      </Tab>,
    ],
  },
};
