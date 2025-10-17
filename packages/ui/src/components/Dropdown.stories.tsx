import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownItem, DropdownDivider } from './Dropdown';
import { Button } from './Button';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dropdown trigger={<Button>Open Menu</Button>}>
      <DropdownItem>Profile</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Logout</DropdownItem>
    </Dropdown>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <Dropdown trigger={<Button variant='outline'>Actions</Button>}>
      <DropdownItem>Edit</DropdownItem>
      <DropdownItem>Duplicate</DropdownItem>
      <DropdownItem disabled>Archive (Coming Soon)</DropdownItem>
      <DropdownDivider />
      <DropdownItem>Delete</DropdownItem>
    </Dropdown>
  ),
};

export const AlignRight: Story = {
  render: () => (
    <Dropdown trigger={<Button>Menu</Button>} align='right'>
      <DropdownItem>Option 1</DropdownItem>
      <DropdownItem>Option 2</DropdownItem>
      <DropdownItem>Option 3</DropdownItem>
    </Dropdown>
  ),
};
