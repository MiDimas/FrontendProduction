import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleBlockType, ArticleCodeBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

const meta: Meta<typeof ArticleCodeBlockComponent> = {
    title: 'entities/Article/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
    },
};

export default meta;

/* eslint-disable max-len */
const block: ArticleCodeBlock = {
    id: '3',
    type: ArticleBlockType.CODE,
    code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
};

type Story = StoryObj<typeof ArticleCodeBlockComponent>

export const ArticleCodeBlockComponentLight: Story = {
    args: { block },
};
export const ArticleCodeBlockComponentDark: Story = {
    args: { block },
    decorators: [ThemeDecorator(Theme.DARK)],
};
