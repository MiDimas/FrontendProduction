import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
    },
    decorators: [StoreDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const NotFoundPageLight: Story = {
    args: {},
};

export const NotFoundPageDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
