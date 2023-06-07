import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink } from './AppLink';

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

export const AppLinkLight: Story = {
    args: {},
};

export const AppLinkDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
