import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { LangSwitcher } from './LangSwitcher';

const meta: Meta<typeof LangSwitcher> = {
    title: 'features/LangSwitcher',
    component: LangSwitcher,
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const LangSwitcherLight: Story = {
    args: {},
};

export const LangSwitcherDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
