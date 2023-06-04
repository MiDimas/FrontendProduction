import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: 'DEFAULT',
    },
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: 'CLEAR',
    },
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'OUTLINE',
    },
};
export const OutlineDark: Story = {
    args: {
        theme: ThemeButton.OUTLINE,
        children: 'OUTLINE',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
