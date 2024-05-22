import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleViewSelector } from './ArticleViewSelector';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'entities/Article/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof ArticleViewSelector>

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
