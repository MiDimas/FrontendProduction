import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from './Navbar';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const NavbarLight: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: {},
        }),
    ],
};
export const NavbarDark: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: undefined },
        }),
    ],
};

export const NavbarLightLogged: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            user: { authData: { username: 'pet' } },
        }),
    ],
};
export const NavbarDarkLogged: Story = {
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            user: { authData: { username: 'pet' } },
        }),
    ],
};
