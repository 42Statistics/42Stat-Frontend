import type { Meta, StoryObj } from '@storybook/react';
import { createRef } from 'react';
import { MobileSearchInput } from './MobileSearchInput';

const meta = {
  title: 'Common/Input/MobileSearchInput',
  component: MobileSearchInput,
  tags: ['autodocs'],
} satisfies Meta<typeof MobileSearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    inputRef: createRef<HTMLInputElement>(),
    setInput: (input: string) => console.log(input),
    toggle: () => console.log('toggle'),
    onClickSearchBtn: () => console.log('onClickSearchBtn'),
  },
};
