import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
        theme: ButtonTheme.CLEAR,
        children: 'CLEAR',
    },
};

export const ClearInverted: Story = {
    args: {
        theme: ButtonTheme.CLEAR_INVERTED,
        children: 'CLEAR_INVERTED',
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'OUTLINE',
    },
};
export const OutlineSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'OUTLINE',
        size: ButtonSize.L,
    },
};
export const OutlineSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'OUTLINE',
        size: ButtonSize.XL,
    },
};
export const OutlineDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'OUTLINE',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'BACKGROUND',
    },
};
export const BackgroundDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: 'BACKGROUND',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'BACKGROUND_INVERTED',
    },
};
export const BackgroundInvertedDark: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: 'BACKGROUND_INVERTED',
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
export const Square: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
    },
};

export const SquareL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareXL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: '>',
        square: true,
        size: ButtonSize.XL,
    },
};

export const Disabled: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'DISABLED',
        disabled: true,
    },
};
export const DisabledDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'DISABLED',
        disabled: true,
    },
    decorators: [
        ThemeDecorator(Theme.DARK),
    ],
};
