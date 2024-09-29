import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ThemeButton } from './Button';
import { Theme } from 'app/providers/ThemeProvider';

import {themeDecorator} from 'shared/config/storybook/decorators/ThemeDecorator';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    theme: ThemeButton,
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

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

export const Clear: Story = {
  args: {
    children: 'TEST',
    theme: ThemeButton.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: 'TEST',
    theme: ThemeButton.CLEAR,
  },
};
ClearDark.decorators = [themeDecorator(Theme.DARK)];


export const Round: Story = {
  args: {
    children: 'TEST',
    theme: ThemeButton.ROUND,
  },
};

export const RoundDark: Story = {
  args: {
    children: 'TEST',
    theme: ThemeButton.ROUND,
  },
};

RoundDark.decorators = [themeDecorator(Theme.DARK)];

export const PrimaryBtn: Story = {
  args: {
    children: 'TEST',
    theme: ThemeButton.PRIME,
  },
};

export const DisabledBtn: Story = {
  args: {
    children: 'TEST',
    disabled: true,
  },
};
