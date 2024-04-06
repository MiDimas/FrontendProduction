import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
    },
    decorators: [StoreDecorator({
        profile: {
            form: {
                firstname: 'Peter',
                lastname: 'Parker',
                age: 25,
                username: 'spider',
                city: 'New-York',
                country: Country.Kazakhstan,
                currency: Currency.USD,
                // eslint-disable-next-line max-len
                avatar: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
            },
        },
    })],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const ProfilePageLight: Story = {
    args: {},
};

export const ProfilePageDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
