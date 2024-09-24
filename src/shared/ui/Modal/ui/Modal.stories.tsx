import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';

import { themeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {

    },
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEST',
        isOpen: true,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'TEST',
        isOpen: true,
    },
};
PrimaryDark.decorators = [themeDecorator(Theme.DARK)];


