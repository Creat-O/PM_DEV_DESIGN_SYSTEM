import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'option',
  },
};

export const Checked: Story = {
  args: {
    label: 'Selected option',
    defaultChecked: true,
    name: 'option',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
    name: 'option',
  },
};

export const Group: Story = {
  render: () => (
    <RadioGroup>
      <Radio label='Option 1' name='group' defaultChecked />
      <Radio label='Option 2' name='group' />
      <Radio label='Option 3' name='group' />
      <Radio label='Option 4 (Disabled)' name='group' disabled />
    </RadioGroup>
  ),
};
