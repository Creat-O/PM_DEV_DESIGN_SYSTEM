import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';
import { Card, CardContent } from './Card';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue='tab1'>
      <TabsList>
        <TabsTrigger value='tab1'>Account</TabsTrigger>
        <TabsTrigger value='tab2'>Password</TabsTrigger>
        <TabsTrigger value='tab3'>Settings</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <Card>
          <CardContent className='pt-6'>
            <p>Account settings content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='tab2'>
        <Card>
          <CardContent className='pt-6'>
            <p>Password management content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value='tab3'>
        <Card>
          <CardContent className='pt-6'>
            <p>General settings content goes here.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <Tabs defaultValue='overview'>
      <TabsList>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='analytics'>Analytics</TabsTrigger>
        <TabsTrigger value='reports'>Reports</TabsTrigger>
      </TabsList>
      <TabsContent value='overview'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold mb-2'>Overview</h3>
          <p className='text-gray-600'>This is the overview tab with detailed information about your dashboard.</p>
        </div>
      </TabsContent>
      <TabsContent value='analytics'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold mb-2'>Analytics</h3>
          <p className='text-gray-600'>View your analytics and performance metrics here.</p>
        </div>
      </TabsContent>
      <TabsContent value='reports'>
        <div className='p-4'>
          <h3 className='text-lg font-semibold mb-2'>Reports</h3>
          <p className='text-gray-600'>Generate and download reports from this section.</p>
        </div>
      </TabsContent>
    </Tabs>
  ),
};
