import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/tests/avatar.webp';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {

    },
    decorators: [
        StoreDecorator({
            profile: {},
        }),
    ],

};
export default meta;

type Story = StoryObj<typeof EditableProfileCard>;

export const EditableProfileCardEmptyLight: Story = {
    args: {},
};

export const EditableProfileCardEmptyDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const EditableProfileCardLight: Story = {
    args: {},
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
                avatar: Avatar,
            },
        },
    })],
};

export const EditableProfileCardDark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
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
    ],
};
