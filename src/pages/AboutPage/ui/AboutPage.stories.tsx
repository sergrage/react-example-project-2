import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import AboutPage from './AboutPage';
import { Theme } from 'app/providers/ThemeProvider';

import {themeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {

  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'TEST',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'TEST',
  },
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];



