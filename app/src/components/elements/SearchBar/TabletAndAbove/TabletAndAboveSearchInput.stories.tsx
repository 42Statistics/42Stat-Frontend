import type { Meta, StoryObj } from '@storybook/react';
import { createRef } from 'react';
import { TabletAndAboveSearchInput } from './TabletAndAboveSearchInput';

const meta = {
  title: 'Common/Input/TabletAndAboveSearchInput',
  component: TabletAndAboveSearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof TabletAndAboveSearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputRef: createRef<HTMLInputElement>(),
    setInput: (input: string) => console.log(input),
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => console.log(e),
  },
};
