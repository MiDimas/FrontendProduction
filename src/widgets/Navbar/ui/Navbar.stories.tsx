import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from 'widgets/Navbar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarLight: Story = {
    args: {},
};
export const NavbarDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
