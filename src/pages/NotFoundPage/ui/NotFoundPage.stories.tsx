import type { Meta, StoryObj } from '@storybook/react';
import {NotFoundPage} from './NotFoundPage';
import { Theme } from 'app/providers/ThemeProvider';
import {themeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {

  },
  tags: ['autodocs'],
  args: { },
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {

  },
};

export const PrimaryDark: Story = {
  args: {

  },
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];



