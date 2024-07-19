import { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { EditableProfileCard } from './EditableProfileCard';

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {},
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
    decorators: [
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
                    // eslint-disable-next-line max-len
                    avatar: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
                },
            },
        }),
    ],
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
                    // eslint-disable-next-line max-len
                    avatar: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
                },
            },
        }),
    ],
};
