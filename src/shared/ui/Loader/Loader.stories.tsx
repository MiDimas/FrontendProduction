import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
    },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const LoaderLight: Story = {
    args: {},
};

export const LoaderDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
