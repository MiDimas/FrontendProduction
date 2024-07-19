import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: undefined,
            },
        }),
    ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarNoAuthLight: Story = {
    args: {},
};

export const SidebarNoAuthDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SidebarAuthLight: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {
                authData: {},
            },
        }),
    ],
};

export const SidebarAuthDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: {
                authData: {},
            },
        }),
    ],
};
