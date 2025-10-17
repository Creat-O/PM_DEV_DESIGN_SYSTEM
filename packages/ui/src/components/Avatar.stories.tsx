import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fallback: 'JD',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
  },
};

export const Small: Story = {
  args: {
    fallback: 'SM',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    fallback: 'LG',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    fallback: 'XL',
    size: 'xl',
  },
};
