import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LoginForm } from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormLight: Story = {
    args: {},
};

export const LoginFormDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};