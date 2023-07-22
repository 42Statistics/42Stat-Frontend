import type { Meta, StoryObj } from '@storybook/react';

import { Tab, Tabs } from '.';

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
      <Tab
        key="general"
        selected
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key="eval"
        onClick={() => {
          /* pass */
        }}
      >
        평가
      </Tab>,
    ],
  },
};

export const ManyTabs: Story = {
  args: {
    children: [
      <Tab
        key={1}
        selected
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={2}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={3}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={4}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={5}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={6}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={7}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={8}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={9}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={10}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={11}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={12}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={13}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={14}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={15}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={16}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={17}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={18}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={19}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
      <Tab
        key={20}
        onClick={() => {
          /* pass */
        }}
      >
        일반
      </Tab>,
    ],
  },
};
