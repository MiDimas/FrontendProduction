import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
    },
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
        theme: AppLinkTheme.INVERTED,
    },
};

export const AppLinkInvertedDark: Story = {
    args: {
        theme: AppLinkTheme.INVERTED,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
