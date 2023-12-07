import { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ArticleDetailsPage from './ArticleDetailsPage';

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
    },
    decorators: [StoreDecorator(
        {
            articleDetails: {
                data: {},
            },
            articleDetailsComments: {

            },
        },
    )],
};

export default meta;

type Story = StoryObj<typeof ArticleDetailsPage>

export const ArticleDetailsPageLight: Story = {
    args: {},
};
export const ArticleDetailsPageDark: Story = {
    args: {},
    decorators: [ThemeDecorator(Theme.DARK)],
};
