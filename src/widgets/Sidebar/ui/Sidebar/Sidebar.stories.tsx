import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { themeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    
  },
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {

  },
};
export const Dark: Story = {
    args: {
  
    },
  };
  Dark.decorators = [themeDecorator(Theme.DARK)];