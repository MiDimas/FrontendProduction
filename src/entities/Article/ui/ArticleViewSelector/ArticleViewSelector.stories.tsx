import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '../../model/types/article';

const meta: Meta<typeof ArticleViewSelector> = {
    title: 'Article/ArticleViewSelector',
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
