import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { Theme } from '@/shared/const/theme';
import { Comment } from '@/entities/Comment';

const comment: Comment = {
    id: '1',
    text: 'Это че такое?',
    user: {
        id: '1',
        username: 'Димооооон',
        // eslint-disable-next-line max-len
        avatar: 'https://avatars.mds.yandex.net/i?id=7e9acef0d1ce3289c5876000ee15cb28854c28bf-9857494-images-thumbs&n=13',
    },
};

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
    },
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
                    comment,
                    { ...comment, id: '2' },
                ],
            },
        ],
    },
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>

export const ArticleDetailsCommentsNormal: Story = {
};
export const ArticleDetailsCommentsDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
