import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleSortField } from 'entities/Article';
import { ArticleSortSelector } from './ArticleSortSelector';

const meta: Meta<typeof ArticleSortSelector> = {
    title: 'Article/ArticleSortSelector',
    component: ArticleSortSelector,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof ArticleSortSelector>

export const ArticleSortSelectorNormal: Story = {
    args: {
        sort: ArticleSortField.CREATED,
        order: 'asc',
        onChangeOrder: () => {},
        onChangeSort: () => {},
    },
};
export const ArticleSortSelectorDark: Story = {
    args: {
        sort: ArticleSortField.CREATED,
        order: 'asc',
        onChangeOrder: () => {},
        onChangeSort: () => {},
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
