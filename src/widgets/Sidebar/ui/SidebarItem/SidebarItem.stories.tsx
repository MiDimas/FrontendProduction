import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const SidebarItemLight: Story = {
    args: {
        item: SidebarItemList[0],
    },
};

export const SidebarItemDark: Story = {
    args: {
        item: SidebarItemList[0],
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const SidebarItemLightCollapsed: Story = {
    args: {
        item: SidebarItemList[0],
        collapsed: true,
    },
};

export const SidebarItemDarkCollapsed: Story = {
    args: {
        item: SidebarItemList[0],
        collapsed: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};