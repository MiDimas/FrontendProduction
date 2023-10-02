import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import {
    EditableProfileCardHeader,
} from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {},
    decorators: [
        StoreDecorator({
            profile: {},
        }),
    ],
};

export default meta;

type Story = StoryObj<typeof EditableProfileCardHeader>;

export const EditableProfileCardHeaderLight: Story = {
    args: {},
};

export const EditableProfileCardHeaderDark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const EditableProfileCardHeaderReadonlyLight: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: { readonly: true },
        }),
    ],
};

export const EditableProfileCardHeaderReadonlyDark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: { readonly: true },
        }),
    ],
};
