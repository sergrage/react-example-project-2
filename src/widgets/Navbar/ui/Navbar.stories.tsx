import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { themeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { routerDecorator } from 'shared/config/storybook/decorators/RouterDecorator';

const meta = {
  title: 'widget/Navbar',
  component: Navbar,
  parameters: {
    
  },
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {

  },
};

Light.decorators = [routerDecorator];

export const Dark: Story = {
    args: {
  
    },
  };
  
Dark.decorators = [themeDecorator(Theme.DARK), routerDecorator];