import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Deprecated/Select',
    component: Select,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectLight: Story = {
    args: {
        label: 'выберите опцию',
        options: [
            {
                value: 'option1',
                content: 'Первая опция',
            },
            {
                value: 'option2',
                content: 'Вторая опция',
            },
        ],
    },
};
export const SelectDark: Story = {
    args: {
        label: 'выберите опцию',
        options: [
            {
                value: 'option1',
                content: 'Первая опция',
            },
            {
                value: 'option2',
                content: 'Вторая опция',
            },
        ],
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const SelectDisabled: Story = {
    args: {
        label: 'выберите опцию',
        options: [
            {
                value: 'option1',
                content: 'Первая опция',
            },
            {
                value: 'option2',
                content: 'Вторая опция',
            },
        ],
        readonly: true,
    },
};
