import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleView } from '../../model/consts/articleConsts';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';

const meta: Meta<typeof ArticleListItemSkeleton> = {
    title: 'entities/Article/ArticleListItemSkeleton',
    component: ArticleListItemSkeleton,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof ArticleListItemSkeleton>

export const ArticleListItemSkeletonLightSmall: Story = {
    args: {
        view: ArticleView.SMALL,
    },
};
export const ArticleListItemSkeletonDarkSmall: Story = {
    args: {
        view: ArticleView.SMALL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ArticleListItemSkeletonLightBig: Story = {
    args: {
        view: ArticleView.BIG,
    },
};
export const ArticleListItemSkeletonDarkBig: Story = {
    args: {
        view: ArticleView.BIG,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
