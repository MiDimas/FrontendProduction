import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ArticleDetailsComments } from './ArticleDetailsComments';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof ArticleDetailsComments> = {
    title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
    component: ArticleDetailsComments,
    argTypes: {
    },
    decorators: [StoreDecorator({})],
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsComments>

export const ArticleDetailsCommentsNormal: Story = {
    args: {},
};
export const ArticleDetailsCommentsDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
