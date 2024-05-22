import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
    },
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const MainPageLight: Story = {
    args: {},
};

export const MainPageDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
