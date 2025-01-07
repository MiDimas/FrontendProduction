import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Button} from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
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
        variant: 'clear',
        children: 'CLEAR',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'OUTLINE',
    },
};
export const OutlineSizeL: Story = {
    args: {
        variant: 'outline',
        children: 'OUTLINE',
        size: 'l',
    },
};
export const OutlineSizeXL: Story = {
    args: {
        variant: 'outline',
        children: 'OUTLINE',
        size: 'xl',
    },
};
export const OutlineDark: Story = {
    args: {
        variant: 'outline',
        children: 'OUTLINE',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Disabled: Story = {
    args: {
        variant: 'outline',
        children: 'DISABLED',
        disabled: true,
    },
};
export const DisabledDark: Story = {
    args: {
        variant: 'outline',
        children: 'DISABLED',
        disabled: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
