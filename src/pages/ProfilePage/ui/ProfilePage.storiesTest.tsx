import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

import { themeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    parameters: {

    },
    tags: ['autodocs'],
    args: { },
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
    args: {

    },
};

export const ProfileDark: Story = {
    args: {

    },
};
ProfileDark.decorators = [themeDecorator(Theme.DARK)];



