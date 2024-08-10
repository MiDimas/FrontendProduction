import { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './PageLoader';
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "@/shared/const/theme";

const meta: Meta<typeof PageLoader> = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof PageLoader>

export const PageLoaderNormal: Story = {
    args: {},
};
export const PageLoaderDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
