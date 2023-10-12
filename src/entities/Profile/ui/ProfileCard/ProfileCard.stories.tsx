import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/tests/avatar.webp';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const ProfileCardWithData: Story = {
    args: {
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
};

export const ProfileCardWithDataDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
    args: {
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
};

export const ProfileCardError: Story = {
    args: {
        error: 'error',
    },
};

export const ProfileCardErrorDark: Story = {
    args: {
        error: 'error',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const ProfileCardLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const ProfileCardLoadingDark: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};