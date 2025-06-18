import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/Redesigned/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/',
        children: 'Link',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const AppLinkPrimaryLight: Story = {
    args: {},
};

export const AppLinkPrimaryDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const AppLinkInvertedLight: Story = {
    args: {
        variant: 'primary',
    },
};

export const AppLinkInvertedDark: Story = {
    args: {
        variant: 'red',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
