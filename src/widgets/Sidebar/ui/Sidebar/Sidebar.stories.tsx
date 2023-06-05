import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const SidebarLight: Story = {
    args: {},
};

export const SidebarDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
