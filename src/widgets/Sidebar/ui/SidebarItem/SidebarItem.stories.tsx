import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import MainIcon from 'shared/assets/icons/home_icon.svg';
import { SidebarItem } from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
    argTypes: {
    },
    decorators: [
        StoreDecorator({}),
    ],
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const SidebarItemLight: Story = {
    args: {
        item: {
            path: '/',
            Icon: MainIcon,
            text: 'Главная',
        },
    },
};

export const SidebarItemDark: Story = {
    args: {
        item: {
            path: '/',
            Icon: MainIcon,
            text: 'Главная',
        },
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const SidebarItemLightCollapsed: Story = {
    args: {
        item: {
            path: '/',
            Icon: MainIcon,
            text: 'Главная',
        },
        collapsed: true,
    },
};

export const SidebarItemDarkCollapsed: Story = {
    args: {
        item: {
            path: '/',
            Icon: MainIcon,
            text: 'Главная',
        },
        collapsed: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
