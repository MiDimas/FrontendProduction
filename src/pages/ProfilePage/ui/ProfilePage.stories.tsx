import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/tests/avatar.webp';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const ProfilePageLight: Story = {
    args: {},
    decorators: [StoreDecorator({
        profile: {
            data: {
                firstname: 'Peter',
                lastname: 'Parker',
                age: 25,
                username: 'spider',
                city: 'New-York',
                country: Country.Kazakhstan,
                currency: Currency.USD,
                avatar: Avatar,
            },
        },
    })],
};

export const ProfilePageDark: Story = {
    decorators: [
        StoreDecorator({
            profile: {
                data: {
                    firstname: 'Peter',
                    lastname: 'Parker',
                    age: 25,
                    username: 'spider',
                    city: 'New-York',
                    country: Country.Kazakhstan,
                    currency: Currency.USD,
                    avatar: Avatar,
                },
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};
