import { Meta, StoryObj } from '@storybook/react';
import { ArticleView } from '@/entities/Article';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleViewSelector } from './ArticleViewSelector';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ArticleViewSelector>;

export const ArticleViewSelectorNormal: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};
export const ArticleViewSelectorDark: Story = {
    args: {
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
