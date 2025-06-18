import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Redesigned/Input',
    component: Input,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputLight: Story = {
    args: {
        placeholder: 'Веведите что нибудь',
        value: '1123',
    },
};

export const InputDark: Story = {
    args: {
        placeholder: 'Веведите что нибудь',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
