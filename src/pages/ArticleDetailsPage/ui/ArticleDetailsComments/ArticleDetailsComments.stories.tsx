import { Meta, StoryObj } from '@storybook/react';
import type { Comment } from '@/entities/Comment';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleDetailsComments } from './ArticleDetailsComments';

const comment: Comment = {
    id: '1',
    text: 'Это че такое?',
    user: {
        id: '1',
        username: 'Димооооон',
    },
};

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {},
    args: {
        id: '1',
    },
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [
            {
                url: `${__API__}/comments?articleId=1&_expand=user`,
                method: 'GET',
                status: 200,
                response: [
                    { ...comment, id: '1' },
                    { ...comment, id: '2' },
                ],
            },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>;

export const ArticleDetailsCommentsNormal: Story = {};
export const ArticleDetailsCommentsDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
