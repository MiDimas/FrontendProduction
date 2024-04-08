import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType } from '../../model/consts/articleConsts';
import { ArticleImageBlock } from '../../model/types/article';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

const meta: Meta<typeof ArticleImageBlockComponent> = {
    title: 'entities/Article/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
    },
};

export default meta;

type Story = StoryObj<typeof ArticleImageBlockComponent>

/* eslint-disable max-len */
const block: ArticleImageBlock = {
    id: '2',
    type: ArticleBlockType.IMAGE,
    src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
    title: 'Рисунок 1 - скриншот сайта',
};
export const ArticleImageBlockComponentNormal: Story = {
    args: { block },
};
export const ArticleImageBlockComponentDark: Story = {
    args: { block },
    decorators: [ThemeDecorator(Theme.DARK)],
};
